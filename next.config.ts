import type {NextConfig} from 'next';
import {resolve} from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // Avoid bundling Next DevTools userspace code in production builds.
    // This also provides a safe fallback if the dev overlay hits an RSC manifest bug.
    if (!dev) {
      config.resolve = config.resolve || {};
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'next/dist/next-devtools/userspace/app/segment-explorer-node': resolve(
          __dirname,
          'lib/next-devtools-segment-explorer-stub.tsx'
        ),
      };
    }

    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyÃ¢Â€Â”file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
