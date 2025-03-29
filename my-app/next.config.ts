import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pokemonapp",
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
