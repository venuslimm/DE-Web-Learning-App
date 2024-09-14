/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
  output: "standalone", // TODO: this need to add? or can remove?
};

export default nextConfig;
