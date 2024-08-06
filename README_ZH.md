# 项目名称

md-html

[English](README.md)

## 项目简介

`md-html` 是一个用于渲染 Markdown 文件为 HTML 的工具，使用 GitHub 风格的 Markdown 样式和代码高亮，同时集成了 `marked-alert` 和 `marked-katex-extension` 插件，方便处理提示信息和数学公式。

## 功能特点

- **自定义模板**: 支持使用自定义的 HTML 模板。
- **代码高亮**: 使用 `highlight.js` 进行代码高亮。
- **GitHub 风格样式**: 支持 GitHub 风格的 Markdown 样式。
- **提示信息**: 集成 `marked-alert` 插件，支持 Markdown 中的提示信息。
- **数学公式**: 集成 `marked-katex-extension` 插件，支持 KaTeX 数学公式渲染。

## 安装

使用 npm 安装：

```bash
npm install @karinjs/md-html
```

## 使用方法

### 基本使用

以下是一个基本使用示例：

```javascript
import { markdown } from '@karinjs/md-html'

const markdownText = '# Hello, Markdown!'
const html = markdown(markdownText, {})
console.log(html)

```

### 配置参数

可以传递一个配置对象来自定义渲染行为：

```javascript
import { markdown } from '@karinjs/md-html'

const options = {
  template: 'path/to/custom/template.html',
  katex: { throwOnError: false },
  gitcss: 'github-markdown-dark.css', // 使用 GitHub 风格的暗色主题
  highlight: 'atom-one-dark', // 使用 Atom One Dark 代码高亮主题
}

const markdownText = '# Hello, Markdown!'
const html = markdown(markdownText, options)
console.log(html)
```

### Karin 中使用

```javascript
import karin, { render, segment } from 'node-karin'
import { markdown } from '@karinjs/md-html'
import fs from 'node:fs'

export const hello = karin.command(/^#test$/, async (e) => {
  // 定义插件路径
  const pluginPath = process.cwd() + '/plugins/karin-plugin-basic'
  // 读取markdown文件
  const markdownText = fs.readFileSync(`${pluginPath}/README.md`, 'utf8')
  // 生成html文本
  const html = markdown(markdownText, {})
  // 写入html文件
  fs.writeFileSync(`${pluginPath}/README.html`, html, 'utf8')
  // 生成图片
  const image = await render.renderHtml(`${pluginPath}/README.html`)
  // 发送图片
  e.reply(segment.image(image))
  return true
})
```

## 配置选项

`Options` 接口定义了可配置的选项：

- `template` (可选): 自定义 HTML 模板的文件路径或模板字符串。
- `katex` (可选): KaTeX 的配置选项，具体参考 [KaTeX 文档](https://katex.org/docs/options.html)。
- `gitcss` (可选): GitHub Markdown 样式主题，可选值见 [**`GithubMarkdownThemes`**](https://github.com/KarinJS/md-html/blob/d804420af9c0eb3960533b4400568ea15bc076aa/src/styles.ts#L2) 枚举。
- `highlight` (可选): 代码高亮主题，可选值见 [**`HighlightJsThemes`**](https://github.com/KarinJS/md-html/blob/d804420af9c0eb3960533b4400568ea15bc076aa/src/styles.ts#L20) 枚举。

## 开发与构建

### 项目结构

```
@karinjs/md-html/
├── src/
│   ├── index.ts
│   ├── styles.ts
├── package.json
├── README.md
└── ...
```

### 脚本命令

- `npm run build`: 构建项目。

## 贡献

欢迎提交 Issue 和 Pull Request 来贡献代码。

## 许可证

本项目采用 MIT 许可证。详细信息请参阅 LICENSE 文件。
