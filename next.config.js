module.exports = {
    compiler: {
      styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env['IMAGE_PROTOCOL'] || 'http',
        hostname: process.env['IMAGE_HOST'] ||  '127.0.0.1',
        port: process.env['IMAGE_PORT'] || '8000',
        pathname: process.env['IMAGE_PATH'] || '/media/**',
      },
    ],
  },
}

console.log(
  process.env['IMAGE_PROTOCOL'],
  process.env['IMAGE_HOST'],
  process.env['IMAGE_PORT'],
  process.env['IMAGE_PATH']
)