const postcss = require('@stencil/postcss');
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-app',
  generateDistribution: true,
  generateWWW: true,
  serviceWorker: null,
  plugins: [
    sass(),
    postcss({
      plugins: [
        require('autoprefixer')({
          browsers: ['last 6 versions']
        }),
        require('cssnano')(),
        require('postcss-reporter')()
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
