import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server-rendered app (auth + Firestore) — runs on Firebase App Hosting.
  // ESLint isn't part of this template; don't block the build on it.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
