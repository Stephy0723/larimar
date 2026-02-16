import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', 
  // Si estamos en producción, usamos el nombre del repo. Si es local, no usamos nada.
  basePath: isProd ? '/larimar' : '',
  assetPrefix: isProd ? '/larimar' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;