// next.config.js
module.exports = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'voluntary.subcodeco.com',
        },
        {
          protocol: 'https',
          hostname: 'alataa-panel.alataa-int.com',
        },
        {
          protocol: 'https',
          hostname: 'ataa.subcodeco.com',
        },
      ],
    },
  };