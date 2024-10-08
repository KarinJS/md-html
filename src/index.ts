import fs from 'fs'
import path from 'path'
import hljs from 'highlight.js'
import { marked } from 'marked'
import mustache from 'mustache'
import { fileURLToPath } from 'url'
import markedAlert from 'marked-alert'
import markedKatex from 'marked-katex-extension'
import { GithubMarkdownThemes, HighlightJsThemes } from './styles'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

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
}

/** 当前 npm 包的绝对路径 */
export const pkgpath = path.resolve(fileURLToPath(import.meta.url), '../../').replace(/\\/g, '/')

/** Markdown 渲染器 */
export default class Markdown {
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
  marked: typeof marked
  /** github-markdown-css npm包路径 */
  npm_github_markdown_css: string
  /** highlight.js npm包路径 */
  npm_highlight_js: string
  constructor (config: Options) {
    this.config = config
    this.templatepath = pkgpath + '/index.html'
    this.template = ''
    this.npm_github_markdown_css = this.findPackageRoot(require.resolve('github-markdown-css'))
    this.npm_highlight_js = this.findPackageRoot(require.resolve('highlight.js'))

    this.gitcss = `${this.npm_github_markdown_css}/${GithubMarkdownThemes.GitHub}`
    this.highlight = `${this.npm_highlight_js}/styles/${HighlightJsThemes.GitHub}`
    this.marked = marked
    this.init()
  }

  /**
   * 查找包根目录
   * @param dir - 当前目录
   * @returns - 包根目录
   */
  findPackageRoot (dir: string): string {
    if (fs.existsSync(path.join(dir, 'package.json'))) return dir
    const parentDir = path.dirname(dir)
    if (parentDir === dir) {
      throw new Error('Cannot find package root directory')
    }
    return this.findPackageRoot(parentDir)
  }

  init () {
    /** 使用自定义渲染器来进行代码高亮并添加行号 */
    const renderer: any = {
      code (code: string, infostring: string) {
        const language = hljs.getLanguage(infostring) ? infostring : 'plaintext'
        const highlighted = hljs.highlight(code, { language, ignoreIllegals: true }).value

        const lines = highlighted.split('\n').map((line, i) => {
          return `<div class="hljs-line" data-line-number="${i + 1}">${line}</div>`
        }).join('\n')

        return `<pre><code class="hljs ${language}">${lines}</code></pre>`
      },
    }

    /** 载入自定义渲染器 */
    this.marked.use({ renderer })
    /** 载入 marked-alert 插件 */
    this.marked.use(markedAlert())
    /** 载入 marked-katex-extension 插件 */
    this.marked.use(markedKatex(this.config?.katex))

    /** 检查是否有传入样式 */
    if (this.config?.gitcss) this.gitcss = `${this.npm_github_markdown_css}/${this.config.gitcss}`
    if (this.config?.highlight) this.highlight = `${this.npm_highlight_js}/styles/${this.config.highlight}`

    /** 检查是否有传入模板 */
    if (this.config?.template) {
      if (!fs.existsSync(this.config.template)) throw TypeError('Template file not found')
      this.templatepath = this.config.template
      this.template = fs.readFileSync(this.config.template, 'utf-8')
    } else {
      this.template = fs.readFileSync(this.templatepath, 'utf-8')
    }
  }

  /**
   * 渲染Markdown文件
   * @param markdown Markdown文件路径 或 Markdown文本
   */
  render (markdown: string): string {
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
  `

    /** 判断下是否为路径 */
    if (typeof markdown === 'string' && fs.existsSync(markdown)) {
      const lang = path.extname(markdown).replace(/^\./, '')
      markdown = [
        '```' + lang,
        fs.readFileSync(markdown, 'utf-8'),
        '```',
      ].join('\n')
    }

    const htmlContent = marked(markdown)
    const gitcss = fs.readFileSync(this.gitcss, 'utf-8')
    const highlight = fs.readFileSync(this.highlight, 'utf-8')
    return mustache.render(this.template, { gitcss, highlight, htmlContent, style })
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
