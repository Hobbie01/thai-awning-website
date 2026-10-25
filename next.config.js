/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/services/tent-and-awning-roof",
        destination: "/services/steel-roof",
        statusCode: 301,
      },
    ];
  },
};
module.exports = nextConfig;
