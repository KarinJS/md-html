import fs from 'fs'
import { defineConfig } from 'vite'
import { builtinModules } from 'node:module'

export default defineConfig({
  build: {
    target: 'node18',
    lib: {
      formats: ['es'],
      fileName: (_, name) => `${name}.mjs`,
      entry: ['src/index.ts'],
    },
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map((mod) => `node:${mod}`),
      ],
      output: {
        inlineDynamicImports: true,
      },
      cache: false,
    },
    minify: false,
    commonjsOptions: {
      include: [
        /node_modules/,
      ],
      transformMixedEsModules: true,
      defaultIsModuleExports: true,
    },
  },
  plugins: [
    {
      name: 'cp-css',
      closeBundle: () => {
        const dir = 'dist/public'
        const githubCssDir = `${dir}/github-markdown-css`
        const highlightDir = `${dir}/highlight`

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        fs.cpSync('node_modules/github-markdown-css', githubCssDir, { recursive: true, force: true })
        fs.cpSync('node_modules/highlight.js/styles', highlightDir, { recursive: true, force: true })

        /** 删除github-css下 非css文件 */
        fs.readdirSync(githubCssDir).forEach((file) => {
          if (!file.endsWith('.css')) {
            fs.unlinkSync(`${githubCssDir}/${file}`)
          }
        })

        /** 删除highlight下不带min的css 非css跳过 */
        fs.readdirSync(highlightDir).forEach((file) => {
          if (file.endsWith('.css') && !file.includes('min')) {
            fs.unlinkSync(`${highlightDir}/${file}`)
          }
        })

        fs.readdirSync(`${highlightDir}/base16`).forEach((file) => {
          if (file.endsWith('.css') && !file.includes('min')) {
            fs.unlinkSync(`${highlightDir}/base16/${file}`)
          }
        })
      },
    },
  ],
})
