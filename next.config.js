const createMDX = require('@next/mdx')
const remarkGfm = require('remark-gfm')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

module.exports = withMDX(nextConfig)
