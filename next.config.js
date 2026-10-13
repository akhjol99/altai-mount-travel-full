/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  async redirects() {
    return [
      {
        // Old festival page address now points to the 2027 page.
        source: "/golden-eagle-festival-2026",
        destination: "/golden-eagle-festival-2027",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "altaimount.com" }],
        destination: "https://www.altaimount.com/:path*",
        permanent: true, // <- this makes it a 301
      },
    ];
  },
};

module.exports = nextConfig;