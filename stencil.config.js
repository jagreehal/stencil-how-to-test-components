const postcss = require('@stencil/postcss');
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-app',
  outputTargets: [{
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'dist'
    }
  ],
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