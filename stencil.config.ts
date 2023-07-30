import { Config } from '@stencil/core';
export const config: Config = {
  namespace: 'stencil-app',
  outputTargets: [{
    type: 'www',
    serviceWorker: null
    },
    {
      type: 'dist'
    },
    {      
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle'
    }
  ]
};