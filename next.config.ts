import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Gera arquivos HTML, CSS e JavaScript estáticos para envio à hospedagem GoDaddy.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
