import fs from 'fs'
import path from 'path'
import hljs from 'highlight.js'
import { marked } from 'marked'
import mustache from 'mustache'
import { fileURLToPath } from 'url'
import markedAlert from 'marked-alert'
import markedKatex from 'marked-katex-extension'
import { GithubMarkdownThemes, HighlightJsThemes } from './styles'

/** 提取 KatexOptions 类型 */
export type KatexOptions = Parameters<typeof markedKatex>[0]

/** 渲染参数 */
export interface Options {
  /** Html模板字符串 或 模板文件路径 */
  template?: string
  /** KaTeX 配置 */
  katex?: KatexOptions
  /** github-markdown-css样式 默认为 GitHub Markdown 自动识别白天/黑夜模式 */
  gitcss?: `${GithubMarkdownThemes}`
  /** Highlight主题配置 默认为 GitHub 主题 */
  highlight?: `${HighlightJsThemes}`
  /** 自定义字体族 */
  fontFamily?: string
  /** 缩放比例 (0.1-5.0) */
  scale?: number
  /** 远程字体CSS链接数组 */
  fontLinks?: string[]
  /** 自定义CSS样式字符串 */
  customCSS?: string
  /** 自定义CSS文件路径数组 */
  customCSSFiles?: string[]
}

const markedClient = (() => {
  /** 使用自定义渲染器来进行代码高亮并添加行号 */
  marked.use({
    renderer: {
      code (code) {
        let language = code.lang
        if (!language) {
          language = hljs.getLanguage(code.raw) as unknown as string
          language = 'plaintext'
        }

        const highlighted = hljs.highlight(code.text, { language, ignoreIllegals: true }).value

        const lines = highlighted.split('\n').map((line, i) => {
          return `<div class="hljs-line" data-line-number="${i + 1}">${line}</div>`
        }).join('\n')

        return `<pre><code class="hljs ${language}">${lines}</code></pre>`
      },
    },
  })
  /** 载入 marked-alert 插件 */
  marked.use(markedAlert())
  return marked
})()

/** 当前 npm 包的绝对路径 */
export const pkgpath = path.resolve(fileURLToPath(import.meta.url), '../../')
/** 默认html模板名称 */
export const htmlPath = path.join(pkgpath, 'index.html')

const { getGithubCssPath, gethighlightPath } = (() => {
  const dir = path.join(fileURLToPath(import.meta.url), '../', 'public')
  let githubDir = path.join(dir, 'github-markdown-css')
  let hljsDir = path.join(dir, 'highlight')
  if (!fs.existsSync(dir)) {
    githubDir = path.join(process.cwd(), 'node_modules', 'github-markdown-css')
    hljsDir = path.join(process.cwd(), 'node_modules', 'highlight.js', 'styles')
  }

  return {
    /**
     * 获取 githubcss 的css样式路径
     * @param name 文件名称
     */
    getGithubCssPath: (name: `${GithubMarkdownThemes}`) => {
      return path.join(githubDir, name)
    },
    /**
     * 获取 highlight.js 的css样式路径
     * @param name 文件名称
     * @returns
     */
    gethighlightPath: (name: `${HighlightJsThemes}`) => {
      /** 如果name没有min 则编辑 */
      if (!name.includes('min')) {
        const parsedPath = path.parse(name)
        const newName = path.format({
          dir: parsedPath.dir,
          name: `${parsedPath.name}.min`,
          ext: parsedPath.ext,
        }) as `${HighlightJsThemes}`
        name = newName
      }
      return path.join(hljsDir, name)
    },
  }
})()

/** Markdown 渲染器 */
export class Markdown {
  /** 渲染参数 */
  config?: Options
  /** Html模板内容 */
  template: string
  /** Html模板文件路径 */
  templatepath: string
  /** github-markdown-css样式 */
  gitcss: string
  /** Highlight主题配置 */
  highlight: string
  /** marked 实例 */
  marked: typeof markedClient
  constructor (config: Options) {
    this.config = config
    this.templatepath = htmlPath
    this.template = ''

    this.gitcss = getGithubCssPath(GithubMarkdownThemes.GitHub)
    this.highlight = gethighlightPath(HighlightJsThemes.GitHub)
    this.marked = markedClient
    this.init()
  }

  init () {
    /** 载入 marked-katex-extension 插件 */
    this.marked.use(markedKatex(this.config?.katex))

    /** 检查是否有传入样式 */
    if (this.config?.gitcss) this.gitcss = getGithubCssPath(this.config.gitcss)
    if (this.config?.highlight) this.highlight = gethighlightPath(this.config.highlight)

    /** 检查是否有传入模板 */
    if (this.config?.template) {
      // 判断是文件路径还是模板字符串
      if (fs.existsSync(this.config.template)) {
        // 是文件路径
        this.templatepath = this.config.template
        this.template = fs.readFileSync(this.config.template, 'utf-8')
      } else {
        // 是模板字符串
        this.template = this.config.template
      }
    } else {
      this.template = fs.readFileSync(this.templatepath, 'utf-8')
    }
  }

  /**
   * 渲染Markdown文件
   * @param markdown Markdown文件路径 或 Markdown文本
   */
  render (markdown: string): string {
    /** 构建字体链接 */
    let fontLinksHTML = ''
    if (this.config?.fontLinks && this.config.fontLinks.length > 0) {
      fontLinksHTML = this.config.fontLinks
        .map(link => `<link rel="stylesheet" href="${link}">`)
        .join('\n')
    }

    /** 读取自定义CSS文件 */
    let customCSSFromFiles = ''
    if (this.config?.customCSSFiles && this.config.customCSSFiles.length > 0) {
      customCSSFromFiles = this.config.customCSSFiles
        .filter(file => fs.existsSync(file))
        .map(file => {
          const cssContent = fs.readFileSync(file, 'utf-8')
          return processCSSRelativePaths(cssContent, file)
        })
        .join('\n')
    }

    /** 构建自定义样式 */
    let customStyle = ''
    if (this.config?.fontFamily) {
      customStyle += `
      body, .markdown-body {
        font-family: ${this.config.fontFamily} !important;
      }
      `
    }

    if (this.config?.scale && this.config.scale > 0) {
      customStyle += `
      html {
        zoom: ${this.config.scale};
        min-width: fit-content;
        overflow-x: auto;
      }
      
      .markdown-body {
        min-width: max-content;
      }
      `
    }

    /** 添加用户自定义CSS */
    if (this.config?.customCSS) {
      customStyle += '\n' + this.config.customCSS
    }

    /** 添加从文件读取的CSS */
    if (customCSSFromFiles) {
      customStyle += '\n' + customCSSFromFiles
    }

    const style = `
    pre {
      position: relative;
      padding: 0;
      margin: 0;
    }
  
    pre code {
      padding-left: 3.8em;
    }
  
    .hljs-line::before {
      content: attr(data-line-number);
      display: inline-block;
      width: 2.2em;
      margin-left: -2.0em;
      text-align: left;
      color: #999;
      border-right: 1px solid #ddd;
      padding-right: 0.5em;
      line-height: 0;
      vertical-align: middle;
    }
  
    .hljs .hljs-line {
      display: block;
      padding-right: 0.5em;
      padding-left: 1.5em;
      line-height: 0;
      margin: 0;
    }
    ${customStyle}
  `

    /** 判断下是否为路径 */
    if (typeof markdown === 'string' && fs.existsSync(markdown)) {
      /** 如果是md文件 直接读取文件内容 */
      if (path.extname(markdown) === '.md') {
        markdown = fs.readFileSync(markdown, 'utf-8')
      } else {
        const lang = path.extname(markdown).replace(/^\./, '')
        markdown = [
          '```' + lang,
          fs.readFileSync(markdown, 'utf-8'),
          '```',
        ].join('\n')
      }
    }

    const htmlContent = marked(markdown)
    const gitcss = fs.readFileSync(this.gitcss, 'utf-8')
    const highlight = fs.readFileSync(this.highlight, 'utf-8')
    return mustache.render(this.template, {
      gitcss,
      highlight,
      htmlContent,
      style,
      fontLinks: fontLinksHTML
    })
  }
}

/**
 * 渲染Markdown文件
 * @param text - Markdown文件路径 或 Markdown文本
 * @param options - 渲染参数
 * @returns - 渲染后的Html字符串
 */
export const markdown = (text: string, options: Options) => {
  const md = new Markdown(options)
  return md.render(text)
}

export default Markdown

/** 处理CSS文件中的相对路径 */
const processCSSRelativePaths = (cssContent: string, cssFilePath: string): string => {
  const cssDir = path.dirname(cssFilePath)

  return cssContent.replace(
    /url\(\s*(["']?)([^"')\s]+)\1\s*\)/g,
    (match, quote, urlPath) => {
      // 跳过绝对URL、data URL和根路径
      if (
        urlPath.startsWith('http://') ||
        urlPath.startsWith('https://') ||
        urlPath.startsWith('data:') ||
        urlPath.startsWith('/') ||
        urlPath.startsWith('file://')
      ) {
        return match
      }

      // 处理相对路径
      if (urlPath.startsWith('./') || urlPath.startsWith('../') || !urlPath.includes('/')) {
        const absolutePath = path.resolve(cssDir, urlPath)

        // 检查文件是否存在
        if (fs.existsSync(absolutePath)) {
          // 正确处理跨平台路径
          let normalizedPath = absolutePath

          // Windows 路径处理
          if (process.platform === 'win32') {
            // 将反斜杠转换为正斜杠
            normalizedPath = normalizedPath.replace(/\\/g, '/')
            // 确保盘符后有冒号
            if (normalizedPath.match(/^[A-Za-z]\//)) {
              normalizedPath = normalizedPath.replace(/^([A-Za-z])\//, '$1:/')
            }
          }

          // 构建 file:// URL
          const fileUrl = `file:///${normalizedPath}`
          return `url(${quote}${fileUrl}${quote})`
        } else {
          console.warn(`CSS资源文件不存在: ${absolutePath}`)
          return match
        }
      }

      return match
    }
  )
}
