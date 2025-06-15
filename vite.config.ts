import fs from 'fs'
import path from 'path'
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
        const distDir = 'dist/public'
        const githubCssDir = `${distDir}/github-markdown-css`
        const highlightDir = `${distDir}/highlight`

        /** 确保目标目录存在 */
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true })
        }

        /** 安全的复制函数，处理符号链接问题 */
        const safeCopy = (src: string, dest: string) => {
          try {
            /** 解析真实路径以避免符号链接问题 */
            const realSrc = fs.realpathSync(src)
            const realDest = path.resolve(dest)

            /** 检查是否试图复制到自身的子目录 */
            if (realDest.startsWith(realSrc)) {
              console.warn(`跳过复制 ${src} 到 ${dest}：目标是源的子目录`)
              return false
            }

            /** 如果目标目录存在，先删除 */
            if (fs.existsSync(dest)) {
              fs.rmSync(dest, { recursive: true, force: true })
            }

            fs.cpSync(realSrc, dest, { recursive: true, force: true })
            return true
          } catch (error) {
            console.error(`复制失败 ${src} -> ${dest}:`, error)
            return false
          }
        }

        /** 尝试复制 github-markdown-css */
        const githubCssSrc = 'node_modules/github-markdown-css'
        if (fs.existsSync(githubCssSrc)) {
          if (safeCopy(githubCssSrc, githubCssDir)) {
            /** 删除 github-css 下的非 CSS 文件 */
            try {
              fs.readdirSync(githubCssDir).forEach((file) => {
                if (!file.endsWith('.css')) {
                  fs.unlinkSync(`${githubCssDir}/${file}`)
                }
              })
            } catch (error) {
              console.error('清理 github-css 文件时出错:', error)
            }
          }
        } else {
          console.warn('未找到 github-markdown-css 模块')
        }

        /** 尝试复制 highlight.js styles */
        const highlightSrc = 'node_modules/highlight.js/styles'
        if (fs.existsSync(highlightSrc)) {
          if (safeCopy(highlightSrc, highlightDir)) {
            /** 删除 highlight 下不带 min 的 CSS 文件 */
            try {
              fs.readdirSync(highlightDir).forEach((file) => {
                if (file.endsWith('.css') && !file.includes('min')) {
                  fs.unlinkSync(`${highlightDir}/${file}`)
                }
              })

              /** 处理 base16 子目录 */
              const base16Dir = `${highlightDir}/base16`
              if (fs.existsSync(base16Dir)) {
                fs.readdirSync(base16Dir).forEach((file) => {
                  if (file.endsWith('.css') && !file.includes('min')) {
                    fs.unlinkSync(`${base16Dir}/${file}`)
                  }
                })
              }
            } catch (error) {
              console.error('清理 highlight 文件时出错:', error)
            }
          }
        } else {
          console.warn('未找到 highlight.js/styles 模块')
        }
      },
    },
  ],
})
