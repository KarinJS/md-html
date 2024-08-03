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
  constructor (config: Options) {
    this.config = config
    this.templatepath = pkgpath + '/index.html'
    this.template = ''
    this.gitcss = `./node_modules/github-markdown-css/${GithubMarkdownThemes.GitHub}`
    this.highlight = `./node_modules/highlight.js/styles/${HighlightJsThemes.GitHub}`
    this.marked = marked
    this.init()
  }

  init () {
    /** 使用自定义渲染器来进行代码高亮 */
    const renderer: any = {
      code (code: string, infostring: string) {
        const language = hljs.getLanguage(infostring) ? infostring : 'plaintext'
        const highlighted = hljs.highlight(code, { language, ignoreIllegals: true }).value
        return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
      },
    }

    /** 载入自定义渲染器 */
    this.marked.use({ renderer })
    /** 载入 marked-alert 插件 */
    this.marked.use(markedAlert())
    /** 载入 marked-katex-extension 插件 */
    this.marked.use(markedKatex(this.config?.katex))

    /** 检查是否有传入样式 */
    if (this.config?.gitcss) this.gitcss = `./node_modules/github-markdown-css/${this.config.gitcss}`
    if (this.config?.highlight) this.highlight = `./node_modules/highlight.js/styles/${this.config.highlight}`

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
    /** 判断下是否为路径 */
    const htmlContent = marked(fs.existsSync(markdown) ? fs.readFileSync(markdown, 'utf-8') : markdown)
    return mustache.render(this.template, { gitcss: this.gitcss, highlight: this.highlight, htmlContent })
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
