# Project Name

md-html

[中文](README_ZH.md)

## Project Overview

`md-html` is a tool for rendering Markdown files to HTML, using GitHub-style Markdown and syntax highlighting. It also integrates `marked-alert` and `marked-katex-extension` plugins for handling alerts and mathematical formulas.

## Features

- **Custom Templates**: Supports custom HTML templates.
- **Syntax Highlighting**: Uses `highlight.js` for syntax highlighting.
- **GitHub-style Markdown**: Supports GitHub-style Markdown.
- **Alerts**: Integrates `marked-alert` plugin for Markdown alerts.
- **Mathematical Formulas**: Integrates `marked-katex-extension` plugin for KaTeX mathematical formula rendering.

## Installation

Install using npm:

```bash
npm install @karinjs/md-html
```

## Usage

### Basic Usage

Here is a basic usage example:

```javascript
import { markdown } from '@karinjs/md-html'

const markdownText = '# Hello, Markdown!'
const html = markdown(markdownText, {})
console.log(html)
```

### Configuration Options

You can pass a configuration object to customize the rendering behavior:

```javascript
import { markdown } from '@karinjs/md-html'

const options = {
  template: 'path/to/custom/template.html',
  katex: { throwOnError: false },
  gitcss: 'github-markdown-dark.css', // Use GitHub-style dark theme
  highlight: 'atom-one-dark', // Use Atom One Dark syntax highlighting theme
}

const markdownText = '# Hello, Markdown!'
const html = markdown(markdownText, options)
console.log(html)
```

### Use in Karin

```javascript
import karin, { render, segment } from 'node-karin'
import { markdown } from '@karinjs/md-html'
import fs from 'node:fs'

export const hello = karin.command(/^#test$/, async (e) => {
  // define plugin path
  const pluginPath = process.cwd() + '/plugins/karin-plugin-basic'
  // read the markdown file
  const markdownText = fs.readFileSync(`${pluginPath}/README.md`, 'utf8')
  // generate html text
  const html = markdown(markdownText, {})
  // write to html file
  fs.writeFileSync(`${pluginPath}/README.html`, html, 'utf8')
  // render picture
  const image = await render.renderHtml(`${pluginPath}/README.html`)
  // send pictures
  e.reply(segment.image(image))
  return true
})

```

## Configuration Options

The `Options` interface defines configurable options:

- `template` (optional): Path to a custom HTML template file or template string.
- `katex` (optional): KaTeX configuration options. Refer to the [KaTeX documentation](https://katex.org/docs/options.html) for details.
- `gitcss` (optional): GitHub Markdown style theme. Possible values are in the `GithubMarkdownThemes` enum.
- `highlight` (optional): Syntax highlighting theme. Possible values are in the `HighlightJsThemes` enum.

## Development and Build

### Project Structure

```
@karinjs/md-html/
├── src/
│   ├── index.ts
│   ├── styles.ts
├── package.json
├── README.md
└── ...
```

### Scripts

- `npm run build`: Build the project.

## Contributions

Feel free to submit issues and pull requests to contribute to the project.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
