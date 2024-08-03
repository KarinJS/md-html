/** github-markdown 主题样式 */
export const enum GithubMarkdownThemes {
  /**
   * GitHub Markdown 自动识别白天/黑夜模式
   */
  GitHub = 'github-markdown.css',
  /**
   * GitHub Markdown 深色主题
   */
  GitHubDark = 'github-markdown-dark.css',
  /**
   * GitHub Markdown 浅色主题
   */
  GitHubLight = 'github-markdown-light.css'
}

/**
 * Highlight.js 代码高亮主题
 */
export const enum HighlightJsThemes {
  /**
   * 1C 企业浅色主题
   */
  OneCLight = '1c-light.css',
  /**
   * 1C 企业浅色主题（压缩版）
   */
  OneCLightMin = '1c-light.min.css',
  /**
   * 无障碍深色主题
   */
  A11yDark = 'a11y-dark.css',
  /**
   * 无障碍深色主题（压缩版）
   */
  A11yDarkMin = 'a11y-dark.min.css',
  /**
   * 无障碍浅色主题
   */
  A11yLight = 'a11y-light.css',
  /**
   * 无障碍浅色主题（压缩版）
   */
  A11yLightMin = 'a11y-light.min.css',
  /**
   * Agate 主题
   */
  Agate = 'agate.css',
  /**
   * Agate 主题（压缩版）
   */
  AgateMin = 'agate.min.css',
  /**
   * An Old Hope 主题
   */
  AnOldHope = 'an-old-hope.css',
  /**
   * An Old Hope 主题（压缩版）
   */
  AnOldHopeMin = 'an-old-hope.min.css',
  /**
   * Android Studio 主题
   */
  AndroidStudio = 'androidstudio.css',
  /**
   * Android Studio 主题（压缩版）
   */
  AndroidStudioMin = 'androidstudio.min.css',
  /**
   * Arduino 浅色主题
   */
  ArduinoLight = 'arduino-light.css',
  /**
   * Arduino 浅色主题（压缩版）
   */
  ArduinoLightMin = 'arduino-light.min.css',
  /**
   * Arta 主题
   */
  Arta = 'arta.css',
  /**
   * Arta 主题（压缩版）
   */
  ArtaMin = 'arta.min.css',
  /**
   * Ascetic 主题
   */
  Ascetic = 'ascetic.css',
  /**
   * Ascetic 主题（压缩版）
   */
  AsceticMin = 'ascetic.min.css',
  /**
   * Atom One 深色合理主题
   */
  AtomOneDarkReasonable = 'atom-one-dark-reasonable.css',
  /**
   * Atom One 深色合理主题（压缩版）
   */
  AtomOneDarkReasonableMin = 'atom-one-dark-reasonable.min.css',
  /**
   * Atom One 深色主题
   */
  AtomOneDark = 'atom-one-dark.css',
  /**
   * Atom One 深色主题（压缩版）
   */
  AtomOneDarkMin = 'atom-one-dark.min.css',
  /**
   * Atom One 浅色主题
   */
  AtomOneLight = 'atom-one-light.css',
  /**
   * Atom One 浅色主题（压缩版）
   */
  AtomOneLightMin = 'atom-one-light.min.css',
  /**
   * Base16 主题
   */
  Base16 = 'base16',
  /**
   * 棕色纸张主题
   */
  BrownPaper = 'brown-paper.css',
  /**
   * 棕色纸张主题（压缩版）
   */
  BrownPaperMin = 'brown-paper.min.css',
  /**
   * CodePen 嵌入主题
   */
  CodePenEmbed = 'codepen-embed.css',
  /**
   * CodePen 嵌入主题（压缩版）
   */
  CodePenEmbedMin = 'codepen-embed.min.css',
  /**
   * Color Brewer 主题
   */
  ColorBrewer = 'color-brewer.css',
  /**
   * Color Brewer 主题（压缩版）
   */
  ColorBrewerMin = 'color-brewer.min.css',
  /**
   * 深色主题
   */
  Dark = 'dark.css',
  /**
   * 深色主题（压缩版）
   */
  DarkMin = 'dark.min.css',
  /**
   * 默认主题
   */
  Default = 'default.css',
  /**
   * 默认主题（压缩版）
   */
  DefaultMin = 'default.min.css',
  /**
   * DeviBeans 主题
   */
  DeviBeans = 'devibeans.css',
  /**
   * DeviBeans 主题（压缩版）
   */
  DeviBeansMin = 'devibeans.min.css',
  /**
   * Docco 主题
   */
  Docco = 'docco.css',
  /**
   * Docco 主题（压缩版）
   */
  DoccoMin = 'docco.min.css',
  /**
   * Far 主题
   */
  Far = 'far.css',
  /**
   * Far 主题（压缩版）
   */
  FarMin = 'far.min.css',
  /**
   * Felipec 主题
   */
  Felipec = 'felipec.css',
  /**
   * Felipec 主题（压缩版）
   */
  FelipecMin = 'felipec.min.css',
  /**
   * Foundation 主题
   */
  Foundation = 'foundation.css',
  /**
   * Foundation 主题（压缩版）
   */
  FoundationMin = 'foundation.min.css',
  /**
   * GitHub 黑暗减弱主题
   */
  GitHubDarkDimmed = 'github-dark-dimmed.css',
  /**
   * GitHub 黑暗减弱主题（压缩版）
   */
  GitHubDarkDimmedMin = 'github-dark-dimmed.min.css',
  /**
   * GitHub 黑暗主题
   */
  GitHubDark = 'github-dark.css',
  /**
   * GitHub 黑暗主题（压缩版）
   */
  GitHubDarkMin = 'github-dark.min.css',
  /**
   * GitHub 主题
   */
  GitHub = 'github.css',
  /**
   * GitHub 主题（压缩版）
   */
  GitHubMin = 'github.min.css',
  /**
   * GML 主题
   */
  Gml = 'gml.css',
  /**
   * GML 主题（压缩版）
   */
  GmlMin = 'gml.min.css',
  /**
   * Google Code 主题
   */
  GoogleCode = 'googlecode.css',
  /**
   * Google Code 主题（压缩版）
   */
  GoogleCodeMin = 'googlecode.min.css',
  /**
   * 渐变深色主题
   */
  GradientDark = 'gradient-dark.css',
  /**
   * 渐变深色主题（压缩版）
   */
  GradientDarkMin = 'gradient-dark.min.css',
  /**
   * 渐变浅色主题
   */
  GradientLight = 'gradient-light.css',
  /**
   * 渐变浅色主题（压缩版）
   */
  GradientLightMin = 'gradient-light.min.css',
  /**
   * 灰度主题
   */
  Grayscale = 'grayscale.css',
  /**
   * 灰度主题（压缩版）
   */
  GrayscaleMin = 'grayscale.min.css',
  /**
   * 混合主题
   */
  Hybrid = 'hybrid.css',
  /**
   * 混合主题（压缩版）
   */
  HybridMin = 'hybrid.min.css',
  /**
   * IDEA 主题
   */
  Idea = 'idea.css',
  /**
   * IDEA 主题（压缩版）
   */
  IdeaMin = 'idea.min.css',
  /**
   * IntelliJ 浅色主题
   */
  IntelliJLight = 'intellij-light.css',
  /**
   * IntelliJ 浅色主题（压缩版）
   */
  IntelliJLightMin = 'intellij-light.min.css',
  /**
   * IR 黑色主题
   */
  IrBlack = 'ir-black.css',
  /**
   * IR 黑色主题（压缩版）
   */
  IrBlackMin = 'ir-black.min.css',
  /**
   * ISBL 深色编辑器主题
   */
  IsblEditorDark = 'isbl-editor-dark.css',
  /**
   * ISBL 深色编辑器主题（压缩版）
   */
  IsblEditorDarkMin = 'isbl-editor-dark.min.css',
  /**
   * ISBL 浅色编辑器主题
   */
  IsblEditorLight = 'isbl-editor-light.css',
  /**
   * ISBL 浅色编辑器主题（压缩版）
   */
  IsblEditorLightMin = 'isbl-editor-light.min.css',
  /**
   * Kimbie 深色主题
   */
  KimbieDark = 'kimbie-dark.css',
  /**
   * Kimbie 深色主题（压缩版）
   */
  KimbieDarkMin = 'kimbie-dark.min.css',
  /**
   * Kimbie 浅色主题
   */
  KimbieLight = 'kimbie-light.css',
  /**
   * Kimbie 浅色主题（压缩版）
   */
  KimbieLightMin = 'kimbie-light.min.css',
  /**
   * Lightfair 主题
   */
  Lightfair = 'lightfair.css',
  /**
   * Lightfair 主题（压缩版）
   */
  LightfairMin = 'lightfair.min.css',
  /**
   * Lioshi 主题
   */
  Lioshi = 'lioshi.css',
  /**
   * Lioshi 主题（压缩版）
   */
  LioshiMin = 'lioshi.min.css',
  /**
   * Magula 主题
   */
  Magula = 'magula.css',
  /**
   * Magula 主题（压缩版）
   */
  MagulaMin = 'magula.min.css',
  /**
   * Mono Blue 主题
   */
  MonoBlue = 'mono-blue.css',
  /**
   * Mono Blue 主题（压缩版）
   */
  MonoBlueMin = 'mono-blue.min.css',
  /**
   * Monokai Sublime 主题
   */
  MonokaiSublime = 'monokai-sublime.css',
  /**
   * Monokai Sublime 主题（压缩版）
   */
  MonokaiSublimeMin = 'monokai-sublime.min.css',
  /**
   * Monokai 主题
   */
  Monokai = 'monokai.css',
  /**
   * Monokai 主题（压缩版）
   */
  MonokaiMin = 'monokai.min.css',
  /**
   * 夜枭主题
   */
  NightOwl = 'night-owl.css',
  /**
   * 夜枭主题（压缩版）
   */
  NightOwlMin = 'night-owl.min.css',
  /**
   * NNFX 深色主题
   */
  NnfxDark = 'nnfx-dark.css',
  /**
   * NNFX 深色主题（压缩版）
   */
  NnfxDarkMin = 'nnfx-dark.min.css',
  /**
   * NNFX 浅色主题
   */
  NnfxLight = 'nnfx-light.css',
  /**
   * NNFX 浅色主题（压缩版）
   */
  NnfxLightMin = 'nnfx-light.min.css',
  /**
   * 北极主题
   */
  Nord = 'nord.css',
  /**
   * 北极主题（压缩版）
   */
  NordMin = 'nord.min.css',
  /**
   * 黑曜石主题
   */
  Obsidian = 'obsidian.css',
  /**
   * 黑曜石主题（压缩版）
   */
  ObsidianMin = 'obsidian.min.css',
  /**
   * 熊猫深色语法主题
   */
  PandaSyntaxDark = 'panda-syntax-dark.css',
  /**
   * 熊猫深色语法主题（压缩版）
   */
  PandaSyntaxDarkMin = 'panda-syntax-dark.min.css',
  /**
   * 熊猫浅色语法主题
   */
  PandaSyntaxLight = 'panda-syntax-light.css',
  /**
   * 熊猫浅色语法主题（压缩版）
   */
  PandaSyntaxLightMin = 'panda-syntax-light.min.css',
  /**
   * Paraiso 深色主题
   */
  ParaisoDark = 'paraiso-dark.css',
  /**
   * Paraiso 深色主题（压缩版）
   */
  ParaisoDarkMin = 'paraiso-dark.min.css',
  /**
   * Paraiso 浅色主题
   */
  ParaisoLight = 'paraiso-light.css',
  /**
   * Paraiso 浅色主题（压缩版）
   */
  ParaisoLightMin = 'paraiso-light.min.css',
  /**
   * Pojoaque 主题
   */
  Pojoaque = 'pojoaque.css',
  /**
   * 纯基础主题
   */
  PureBasic = 'purebasic.css',
  /**
   * 纯基础主题（压缩版）
   */
  PureBasicMin = 'purebasic.min.css',
  /**
   * Qt Creator 深色主题
   */
  QtCreatorDark = 'qtcreator-dark.css',
  /**
   * Qt Creator 深色主题（压缩版）
   */
  QtCreatorDarkMin = 'qtcreator-dark.min.css',
  /**
   * Qt Creator 浅色主题
   */
  QtCreatorLight = 'qtcreator-light.css',
  /**
   * Qt Creator 浅色主题（压缩版）
   */
  QtCreatorLightMin = 'qtcreator-light.min.css',
  /**
   * 彩虹主题
   */
  Rainbow = 'rainbow.css',
  /**
   * 彩虹主题（压缩版）
   */
  RainbowMin = 'rainbow.min.css',
  /**
   * RouterOS 主题
   */
  RouterOs = 'routeros.css',
  /**
   * RouterOS 主题（压缩版）
   */
  RouterOsMin = 'routeros.min.css',
  /**
   * 校书主题
   */
  SchoolBook = 'school-book.css',
  /**
   * 校书主题（压缩版）
   */
  SchoolBookMin = 'school-book.min.css',
  /**
   * 紫色阴影主题
   */
  ShadesOfPurple = 'shades-of-purple.css',
  /**
   * 紫色阴影主题（压缩版）
   */
  ShadesOfPurpleMin = 'shades-of-purple.min.css',
  /**
   * Srcery 主题
   */
  Srcery = 'srcery.css',
  /**
   * Srcery 主题（压缩版）
   */
  SrceryMin = 'srcery.min.css',
  /**
   * StackOverflow 深色主题
   */
  StackOverflowDark = 'stackoverflow-dark.css',
  /**
   * StackOverflow 深色主题（压缩版）
   */
  StackOverflowDarkMin = 'stackoverflow-dark.min.css',
  /**
   * StackOverflow 浅色主题
   */
  StackOverflowLight = 'stackoverflow-light.css',
  /**
   * StackOverflow 浅色主题（压缩版）
   */
  StackOverflowLightMin = 'stackoverflow-light.min.css',
  /**
   * Sunburst 主题
   */
  Sunburst = 'sunburst.css',
  /**
   * Sunburst 主题（压缩版）
   */
  SunburstMin = 'sunburst.min.css',
  /**
   * Tokyo Night 深色主题
   */
  TokyoNightDark = 'tokyo-night-dark.css',
  /**
   * Tokyo Night 深色主题（压缩版）
   */
  TokyoNightDarkMin = 'tokyo-night-dark.min.css',
  /**
   * Tokyo Night 浅色主题
   */
  TokyoNightLight = 'tokyo-night-light.css',
  /**
   * Tokyo Night 浅色主题（压缩版）
   */
  TokyoNightLightMin = 'tokyo-night-light.min.css',
  /**
   * 明天夜晚蓝色主题
   */
  TomorrowNightBlue = 'tomorrow-night-blue.css',
  /**
   * 明天夜晚蓝色主题（压缩版）
   */
  TomorrowNightBlueMin = 'tomorrow-night-blue.min.css',
  /**
   * 明天夜晚亮色主题
   */
  TomorrowNightBright = 'tomorrow-night-bright.css',
  /**
   * 明天夜晚亮色主题（压缩版）
   */
  TomorrowNightBrightMin = 'tomorrow-night-bright.min.css',
  /**
   * Visual Studio 主题
   */
  Vs = 'vs.css',
  /**
   * Visual Studio 主题（压缩版）
   */
  VsMin = 'vs.min.css',
  /**
   * Visual Studio 2015 主题
   */
  Vs2015 = 'vs2015.css',
  /**
   * Visual Studio 2015 主题（压缩版）
   */
  Vs2015Min = 'vs2015.min.css',
  /**
   * Xcode 主题
   */
  Xcode = 'xcode.css',
  /**
   * Xcode 主题（压缩版）
   */
  XcodeMin = 'xcode.min.css',
  /**
   * XT256 主题
   */
  Xt256 = 'xt256.css',
  /**
   * XT256 主题（压缩版）
   */
  Xt256Min = 'xt256.min.css'
}
