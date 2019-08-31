const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    withSass,
    {
      cssLoaderOptions: {
        // importLoaders: 1,
        // localIdentName: '[local]-[hash:base64:5]',
        // url: false, // This fixed my problem
      },
    },
  ],
  [optimizedImages, { optimizeImages: false }],
]);
