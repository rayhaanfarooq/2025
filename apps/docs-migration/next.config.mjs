import { composePlugins, withNx } from '@nx/next'
import { createMDX } from 'fumadocs-mdx/next'

const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    reactStrictMode: true,
    output: 'standalone',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // eslint-disable-next-line node/prefer-global/process
        hostname: process.env.ALLOWED_IMAGE_HOSTNAME || 'avatars.githubusercontent.com',
      },
    ],
  },
}

const withMDX = createMDX()

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
]

export default composePlugins(...plugins)(withMDX(nextConfig))