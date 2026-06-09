import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.kawayanholidayresort.com" },
    ],
  },
};

export default nextConfig;
