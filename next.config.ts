import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["picsum.photos"],
    unoptimized: true, 
  },
  eslint: {
    // Mengabaikan error linting (variabel tak terpakai, dll)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Mengabaikan error tipe data
    ignoreBuildErrors: true,
  },
};

export default nextConfig;