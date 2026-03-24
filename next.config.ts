import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/categories", destination: "/problems", permanent: true },
      { source: "/categories/:slug", destination: "/problems/:slug", permanent: true },
      { source: "/skills", destination: "/solutions", permanent: true },
      { source: "/skills/:slug", destination: "/solutions/:slug", permanent: true },
      { source: "/bundles", destination: "/", permanent: false },
      { source: "/bundles/:slug", destination: "/", permanent: false },
      { source: "/platforms", destination: "/", permanent: false },
      { source: "/platforms/:slug", destination: "/", permanent: false },
      { source: "/compare", destination: "/", permanent: false },
      { source: "/community", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
