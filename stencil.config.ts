import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'prokaryote-loader',
  outputTargets:[
    {
      type: 'dist',
      buildDir: 'prokaryote-loader',
      dir: 'docs/build'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
