import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import { PassThrough } from "stream";

function getPdfBuffer(data: { [k: string]: string }): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const stream = new PassThrough();
    const chunks: Uint8Array[] = [];
    doc.pipe(stream);
    doc.fontSize(24).fillColor("#184A3A").text("Altai Mount Travel", { align: "center" });
    doc.moveDown();
    doc.fontSize(18).fillColor("black").text("Tour Enquiry", { underline: true });
    doc.moveDown();
    Object.entries(data).forEach(([k, v]) => doc.fontSize(12).fillColor("black").text(`${k}: ${v || "-"}`));
    doc.end();
    stream.on("data", c => chunks.push(c));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

export const config = { api: { bodyParser: true } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const {
    name,
    email,
    phone,
    tour,
    dates,
    travelers,
    message,
    // Honeypot field — real users won't fill this in. Bots typically fill every field.
    website,
  } = req.body || {};

  // Silently accept honeypot-triggered submissions so bots don't learn to bypass.
  if (website) {
    return res.status(200).json({ ok: true });
  }

  // Basic input validation — reject obviously bad payloads.
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.length > 200 ||
    email.length > 200 ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const groupSize = travelers != null ? String(travelers) : "";

  try {
    const pdfBuffer = await getPdfBuffer({
      Name: name,
      Email: email,
      Phone: phone,
      Tour: tour,
      Dates: dates,
      Travelers: groupSize,
      Message: message,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.sendgrid.net",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "apikey",
        pass: process.env.SMTP_PASS || ""
      },
    });

    await transporter.sendMail({
      from: `"Altai Mount Travel" <${process.env.MAIL_FROM || "altaimounttravel@gmail.com"}>`,
      to: process.env.MAIL_TO || "altaimounttravel@gmail.com",
      replyTo: email,
      subject: `New tour enquiry from ${name || "Guest"}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Tour: ${tour || "-"}
Dates: ${dates || "-"}
Travelers: ${groupSize || "-"}
Message: ${message}`,
      attachments: [{ filename: `Enquiry-${name || "guest"}.pdf`, content: pdfBuffer, contentType: "application/pdf" }],
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
