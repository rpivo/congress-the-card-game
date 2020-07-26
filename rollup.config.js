// import brotli from "rollup-plugin-brotli";
import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import vue from 'rollup-plugin-vue';

export default {
  input: 'src/App.vue',
  output: {
    dir: 'dist',
    format: 'esm',
    manualChunks: {
      react: ['react'],
      reactDOM: ['react-dom'],
    },
    plugins: [terser()],
  },
  plugins: [
    // brotli(),
    // replace({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};