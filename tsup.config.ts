import { defineConfig } from 'tsup'
import { builtinModules } from 'node:module'

/**
 * @description `tsup` configuration options
 */
export default defineConfig({
  format: 'esm',
  target: 'node18',
  entry: ['src/index.ts'],
  dts: { resolve: true, only: true },
  noExternal: ['marked', 'marked-katex-extension'],
  external: [
    ...builtinModules,
    ...builtinModules.map((node) => `node:${node}`),
  ],
})
