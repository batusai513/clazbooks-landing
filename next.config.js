const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = withPlugins([
  [
    withSass,
    {
      cssLoaderOptions: {
        // importLoaders: 1,
        // localIdentName: '[local]-[hash:base64:5]',
        // url: false, // This fixed my problem
      },
      env: {
        API_SERVER: process.env.API_SERVER,
      },
    },
  ],
  [optimizedImages, { optimizeImages: false }],
]);
