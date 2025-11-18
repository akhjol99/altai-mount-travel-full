# Altai Mount Travel — Full Project (Next.js + Tailwind + React)

Pages: Home, Tours (filters + detail with group-size pricing), Blog (index + posts), About, FAQ, Contact (Nodemailer + PDF).

## Quick start
```bash
npm install
cp .env.sample .env.local  # add your SMTP values
npm run dev
```

Images to add under `/public/images` (or change paths in `data/tours.ts`):
- hero.jpg
- photo2.png
- altai.jpg
- khovd.jpg

## Deploy (Vercel)
- Push to GitHub → New Project in Vercel → add env vars → Deploy.
