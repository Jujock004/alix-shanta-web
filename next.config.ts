import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // On ajoute cette ligne pour calmer l'erreur Turbopack
  turbopack: {},

  webpack: (config, { dev }) => {
    // On n'active le polling qu'en mode développement
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
