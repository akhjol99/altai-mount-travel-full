/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  async redirects() {
    return [
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