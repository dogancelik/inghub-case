/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    html({
      publicPath: '/',
    }),
    replace({preventAssignment: false, 'Reflect.decorate': 'undefined'}),
    resolve(),
    copy({
      targets: [
        { src: 'src/404.html', dest: 'dist' },
      ],
    }),
    /**
     * This minification setup serves the static site generation.
     * For bundling and minification, check the README.md file.
     */
    /*
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    */
    summary(),
  ],
};
