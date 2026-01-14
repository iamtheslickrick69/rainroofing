import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "irp.cdn-website.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "irp-cdn.multiscreensite.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "msgsndr-private.storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.cdn-website.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
