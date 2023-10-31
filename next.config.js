/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/bwestwood11/waterstreet-blog-posts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
