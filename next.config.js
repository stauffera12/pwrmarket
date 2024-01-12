/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/locations/:param1/:param2/:param3",
        destination: "/locations",
      },
    ];
  },
};

module.exports = nextConfig;
