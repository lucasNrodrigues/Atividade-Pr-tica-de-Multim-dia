import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite imagens sem domínio especificado (imagens locais)
    unoptimized: true,
  },
};

export default nextConfig;