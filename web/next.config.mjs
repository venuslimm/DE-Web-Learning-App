import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
  output: "standalone",
  env: {
    LLM_PORT: process.env.LLM_PORT,
    MAGEAI_PORT: process.env.MAGEAI_PORT,
  },
};

export default nextConfig;
