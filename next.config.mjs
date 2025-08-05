/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.cache = {
          type: 'memory', // use in-memory caching to avoid filesystem buffer issues
        };
        return config;
      },
};

export default nextConfig;
