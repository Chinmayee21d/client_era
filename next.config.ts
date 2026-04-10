import type { NextConfig } from "next";

console.log('--- Loading next.config.ts ---');
const nextConfig: NextConfig = {
  output: "standalone",
};
console.log('--- Config output mode:', nextConfig.output, '---');

export default nextConfig;
