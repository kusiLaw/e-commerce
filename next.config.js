module.exports = {
    compiler: {
      styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env['IP_ADDRESS'],
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
}