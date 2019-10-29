
/* eslint-disable */
const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

// module.exports = withCss();

module.exports = withCss({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})



// module.exports = {
//     webpack: (config, { dev }) => {
//       config.node = {
//         fs: 'empty'
//       }
//       return config;
//     },
// };