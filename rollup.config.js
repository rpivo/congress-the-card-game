import { brotliCompressSync } from 'zlib';
import commonjs from '@rollup/plugin-commonjs';
import gzipPlugin from 'rollup-plugin-gzip';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const env = process.env.NODE_ENV;

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    manualChunks: {
      react: ['react'],
      reactDOM: ['react-dom'],
      styledComponents: ['styled-components'],
    },
    plugins: env === 'production' && [terser()],
  },
  plugins: [
    gzipPlugin({
      customCompression: (content) => brotliCompressSync(Buffer.from(content)),
      fileName: '.br',
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    typescript(),
    resolve({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
