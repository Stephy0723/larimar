import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Necesario para generar archivos estáticos que GitHub pueda leer
  images: {
    unoptimized: true, // GitHub Pages no soporta el optimizador de imágenes nativo de Next.js
  },
  // Reemplaza 'nombre-de-tu-repo' por el nombre exacto en GitHub (ej. 'larimar-store')
  basePath: '/larimar', // Nombre exacto de tu repositorio
  assetPrefix: '/larimar',
};

export default nextConfig;