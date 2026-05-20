import type { NextConfig } from "next";

const devOrigins = process.env.NEXT_DEV_ORIGIN?.split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  ...(devOrigins?.length ? { allowedDevOrigins: devOrigins } : {}),
};

export default nextConfig;
