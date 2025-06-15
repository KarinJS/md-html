import fs from 'fs'
import type { Options, Markdown as MarkdownClass } from './index.js'

const dir = process.argv.includes('--prod') ? '../dist/index.mjs' : './index.ts'
const { Markdown, markdown }: {
  Markdown: typeof MarkdownClass
  markdown: (text: string, options: Options) => string
} = await import(dir)

// 测试Markdown文本
const testMarkdown = `
# Markdown 测试文件

这是一个测试文件，用于测试 VSCode 黑暗风格的 Markdown 渲染效果。

## 代码块测试

\`\`\`typescript
// 这是一段TypeScript代码
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return {
    id,
    name: '测试用户',
    email: 'test@example.com'
  };
}

const user = getUser(1);
console.log(user);
\`\`\`

## 表格测试

| 名称 | 类型 | 描述 |
|------|------|------|
| id   | number | 用户ID |
| name | string | 用户名称 |
| email | string | 用户邮箱 |

## 列表测试

### 无序列表

- 项目一
- 项目二
  - 子项目2.1
  - 子项目2.2
- 项目三

### 有序列表

1. 第一步
2. 第二步
   1. 子步骤2.1
   2. 子步骤2.2
3. 第三步

## 引用测试

> 这是一段引用文本
> 
> 这是引用的第二行

## 数学公式测试

行内公式: $E = mc^2$

块级公式:

$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(u)\\,du\\right)=f(x)
$$

## 提示块测试

> [!NOTE]
> 这是一个提示块

> [!WARNING]
> 这是一个警告块

> [!TIP]
> 这是一个提示块

> [!IMPORTANT]
> 这是一个重要信息块

> [!CAUTION]
> 这是一个注意事项块
`

if (!fs.existsSync('test')) {
  fs.mkdirSync('test')
}

// 测试方法1：使用 Markdown 类
async function testMarkdownClass () {
  console.log('测试方法1：使用 Markdown 类')

  // 创建 Markdown 实例
  const md = new Markdown({})

  // 渲染 Markdown
  const html = md.render(testMarkdown)

  // 将结果写入文件
  fs.writeFileSync('test/test-class-output.html', html)
  console.log('已生成 test-class-output.html')
}

// 测试方法2：使用 markdown 函数
async function testMarkdownFunction () {
  console.log('测试方法2：使用 markdown 函数')

  // 渲染 Markdown
  const html = markdown(testMarkdown, {})

  // 将结果写入文件
  fs.writeFileSync('test/test-function-output.html', html)
  console.log('已生成 test-function-output.html')
}

// 测试方法3：从文件读取 Markdown
async function testMarkdownFromFile () {
  console.log('测试方法3：从文件读取 Markdown')

  // 创建测试 Markdown 文件
  fs.writeFileSync('test/test-input.md', testMarkdown)

  // 渲染 Markdown 文件
  const html = markdown('test/test-input.md', {})

  // 将结果写入文件
  fs.writeFileSync('test/test-file-output.html', html)
  console.log('已生成 test-file-output.html')
}

// 运行所有测试
async function runTests () {
  console.log('开始测试 VSCode 黑暗风格 Markdown 渲染...')

  await testMarkdownClass()
  await testMarkdownFunction()
  await testMarkdownFromFile()

  console.log('测试完成！')
}

// 执行测试
runTests().catch(console.error)
