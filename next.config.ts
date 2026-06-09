import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.kawayanholidayresort.com" },
      { protocol: "https", hostname: "arnelbiscarra.great-site.net" },
    ],
  },
};

export default nextConfig;
