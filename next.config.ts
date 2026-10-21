import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The app pages inject the original Framer-export markup verbatim; the
  // Framer runtime mutates the DOM at load time, so React strict-mode double
  // rendering must not interfere with it.
  reactStrictMode: false,
};

export default nextConfig;
