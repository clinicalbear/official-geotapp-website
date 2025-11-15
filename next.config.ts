import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development") {
  void initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,  //  rimuovi o commenta questa riga
};

export default nextConfig;
