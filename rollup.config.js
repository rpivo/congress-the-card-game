import { brotliCompressSync } from 'zlib';
import commonjs from '@rollup/plugin-commonjs';
import gzipPlugin from 'rollup-plugin-gzip';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
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
    gzipPlugin({
      customCompression: content =>
          brotliCompressSync(Buffer.from(content)),
      fileName: '.br',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};