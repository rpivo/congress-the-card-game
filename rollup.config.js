// import brotli from "rollup-plugin-brotli";
import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    plugins: [terser()],
  },
  plugins: [
    // brotli(),
    // replace({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    typescript({
      tsconfig: false,
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};