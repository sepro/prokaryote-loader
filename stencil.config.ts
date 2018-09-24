import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'prokaryote_loader',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
