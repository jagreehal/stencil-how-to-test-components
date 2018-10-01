exports.config = {
  namespace: 'stencil-app',
  outputTargets: [{
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'dist'
    }
  ]
};