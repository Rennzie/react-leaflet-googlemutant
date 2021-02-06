import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [nodeResolve(), typescript({ objectHashIgnoreUnknownHack: true })],
  external: ['react', 'react-dom', 'leaflet', 'react-leaflet'],
};
