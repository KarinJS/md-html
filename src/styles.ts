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
export enum HighlightJsThemes {
  /** 1C 企业浅色主题 */
  OneCLight = '1c-light.css',
  /** 1C 企业浅色主题(压缩) */
  OneCLightMin = '1c-light.min.css',
  /** 无障碍深色主题 */
  A11yDark = 'a11y-dark.css',
  /** 无障碍深色主题(压缩) */
  A11yDarkMin = 'a11y-dark.min.css',
  /** 无障碍浅色主题 */
  A11yLight = 'a11y-light.css',
  /** 无障碍浅色主题(压缩) */
  A11yLightMin = 'a11y-light.min.css',
  /** Agate 主题 */
  Agate = 'agate.css',
  /** Agate 主题(压缩) */
  AgateMin = 'agate.min.css',
  /** An Old Hope 主题 */
  AnOldHope = 'an-old-hope.css',
  /** An Old Hope 主题(压缩) */
  AnOldHopeMin = 'an-old-hope.min.css',
  /** Android Studio 主题 */
  AndroidStudio = 'androidstudio.css',
  /** Android Studio 主题(压缩) */
  AndroidStudioMin = 'androidstudio.min.css',
  /** Arduino 浅色主题 */
  ArduinoLight = 'arduino-light.css',
  /** Arduino 浅色主题(压缩) */
  ArduinoLightMin = 'arduino-light.min.css',
  /** Arta 主题 */
  Arta = 'arta.css',
  /** Arta 主题(压缩) */
  ArtaMin = 'arta.min.css',
  /** Ascetic 主题 */
  Ascetic = 'ascetic.css',
  /** Ascetic 主题(压缩) */
  AsceticMin = 'ascetic.min.css',
  /** Atom One 深色合理主题 */
  AtomOneDarkReasonable = 'atom-one-dark-reasonable.css',
  /** Atom One 深色合理主题(压缩) */
  AtomOneDarkReasonableMin = 'atom-one-dark-reasonable.min.css',
  /** Atom One 深色主题 */
  AtomOneDark = 'atom-one-dark.css',
  /** Atom One 深色主题(压缩) */
  AtomOneDarkMin = 'atom-one-dark.min.css',
  /** Atom One 浅色主题 */
  AtomOneLight = 'atom-one-light.css',
  /** Atom One 浅色主题(压缩) */
  AtomOneLightMin = 'atom-one-light.min.css',
  /** 棕色纸张主题 */
  BrownPaper = 'brown-paper.css',
  /** 棕色纸张主题(压缩) */
  BrownPaperMin = 'brown-paper.min.css',
  /** CodePen 嵌入主题 */
  CodePenEmbed = 'codepen-embed.css',
  /** CodePen 嵌入主题(压缩) */
  CodePenEmbedMin = 'codepen-embed.min.css',
  /** Color Brewer 主题 */
  ColorBrewer = 'color-brewer.css',
  /** Color Brewer 主题(压缩) */
  ColorBrewerMin = 'color-brewer.min.css',
  /** 深色主题 */
  Dark = 'dark.css',
  /** 深色主题(压缩) */
  DarkMin = 'dark.min.css',
  /** 默认主题 */
  Default = 'default.css',
  /** 默认主题(压缩) */
  DefaultMin = 'default.min.css',
  /** DeviBeans 主题 */
  DeviBeans = 'devibeans.css',
  /** DeviBeans 主题(压缩) */
  DeviBeansMin = 'devibeans.min.css',
  /** Docco 主题 */
  Docco = 'docco.css',
  /** Docco 主题(压缩) */
  DoccoMin = 'docco.min.css',
  /** Far 主题 */
  Far = 'far.css',
  /** Far 主题(压缩) */
  FarMin = 'far.min.css',
  /** Felipec 主题 */
  Felipec = 'felipec.css',
  /** Felipec 主题(压缩) */
  FelipecMin = 'felipec.min.css',
  /** Foundation 主题 */
  Foundation = 'foundation.css',
  /** Foundation 主题(压缩) */
  FoundationMin = 'foundation.min.css',
  /** GitHub 黑暗减弱主题 */
  GitHubDarkDimmed = 'github-dark-dimmed.css',
  /** GitHub 黑暗减弱主题(压缩) */
  GitHubDarkDimmedMin = 'github-dark-dimmed.min.css',
  /** GitHub 黑暗主题 */
  GitHubDark = 'github-dark.css',
  /** GitHub 黑暗主题(压缩) */
  GitHubDarkMin = 'github-dark.min.css',
  /** GitHub 主题 */
  GitHub = 'github.css',
  /** GitHub 主题(压缩) */
  GitHubMin = 'github.min.css',
  /** GML 主题 */
  Gml = 'gml.css',
  /** GML 主题(压缩) */
  GmlMin = 'gml.min.css',
  /** Google Code 主题 */
  GoogleCode = 'googlecode.css',
  /** Google Code 主题(压缩) */
  GoogleCodeMin = 'googlecode.min.css',
  /** 渐变深色主题 */
  GradientDark = 'gradient-dark.css',
  /** 渐变深色主题(压缩) */
  GradientDarkMin = 'gradient-dark.min.css',
  /** 渐变浅色主题 */
  GradientLight = 'gradient-light.css',
  /** 渐变浅色主题(压缩) */
  GradientLightMin = 'gradient-light.min.css',
  /** 灰度主题 */
  Grayscale = 'grayscale.css',
  /** 灰度主题(压缩) */
  GrayscaleMin = 'grayscale.min.css',
  /** 混合主题 */
  Hybrid = 'hybrid.css',
  /** 混合主题(压缩) */
  HybridMin = 'hybrid.min.css',
  /** IDEA 主题 */
  Idea = 'idea.css',
  /** IDEA 主题(压缩) */
  IdeaMin = 'idea.min.css',
  /** IntelliJ 浅色主题 */
  IntelliJLight = 'intellij-light.css',
  /** IntelliJ 浅色主题(压缩) */
  IntelliJLightMin = 'intellij-light.min.css',
  /** IR 黑色主题 */
  IrBlack = 'ir-black.css',
  /** IR 黑色主题(压缩) */
  IrBlackMin = 'ir-black.min.css',
  /** ISBL 深色编辑器主题 */
  IsblEditorDark = 'isbl-editor-dark.css',
  /** ISBL 深色编辑器主题(压缩) */
  IsblEditorDarkMin = 'isbl-editor-dark.min.css',
  /** ISBL 浅色编辑器主题 */
  IsblEditorLight = 'isbl-editor-light.css',
  /** ISBL 浅色编辑器主题(压缩) */
  IsblEditorLightMin = 'isbl-editor-light.min.css',
  /** Kimbie 深色主题 */
  KimbieDark = 'kimbie-dark.css',
  /** Kimbie 深色主题(压缩) */
  KimbieDarkMin = 'kimbie-dark.min.css',
  /** Kimbie 浅色主题 */
  KimbieLight = 'kimbie-light.css',
  /** Kimbie 浅色主题(压缩) */
  KimbieLightMin = 'kimbie-light.min.css',
  /** Lightfair 主题 */
  Lightfair = 'lightfair.css',
  /** Lightfair 主题(压缩) */
  LightfairMin = 'lightfair.min.css',
  /** Lioshi 主题 */
  Lioshi = 'lioshi.css',
  /** Lioshi 主题(压缩) */
  LioshiMin = 'lioshi.min.css',
  /** Magula 主题 */
  Magula = 'magula.css',
  /** Magula 主题(压缩) */
  MagulaMin = 'magula.min.css',
  /** Mono Blue 主题 */
  MonoBlue = 'mono-blue.css',
  /** Mono Blue 主题(压缩) */
  MonoBlueMin = 'mono-blue.min.css',
  /** Monokai Sublime 主题 */
  MonokaiSublime = 'monokai-sublime.css',
  /** Monokai Sublime 主题(压缩) */
  MonokaiSublimeMin = 'monokai-sublime.min.css',
  /** Monokai 主题 */
  Monokai = 'monokai.css',
  /** Monokai 主题(压缩) */
  MonokaiMin = 'monokai.min.css',
  /** 夜枭主题 */
  NightOwl = 'night-owl.css',
  /** 夜枭主题(压缩) */
  NightOwlMin = 'night-owl.min.css',
  /** NNFX 深色主题 */
  NnfxDark = 'nnfx-dark.css',
  /** NNFX 深色主题(压缩) */
  NnfxDarkMin = 'nnfx-dark.min.css',
  /** NNFX 浅色主题 */
  NnfxLight = 'nnfx-light.css',
  /** NNFX 浅色主题(压缩) */
  NnfxLightMin = 'nnfx-light.min.css',
  /** 北极主题 */
  Nord = 'nord.css',
  /** 北极主题(压缩) */
  NordMin = 'nord.min.css',
  /** 黑曜石主题 */
  Obsidian = 'obsidian.css',
  /** 黑曜石主题(压缩) */
  ObsidianMin = 'obsidian.min.css',
  /** 熊猫深色语法主题 */
  PandaSyntaxDark = 'panda-syntax-dark.css',
  /** 熊猫深色语法主题(压缩) */
  PandaSyntaxDarkMin = 'panda-syntax-dark.min.css',
  /** 熊猫浅色语法主题 */
  PandaSyntaxLight = 'panda-syntax-light.css',
  /** 熊猫浅色语法主题(压缩) */
  PandaSyntaxLightMin = 'panda-syntax-light.min.css',
  /** Paraiso 深色主题 */
  ParaisoDark = 'paraiso-dark.css',
  /** Paraiso 深色主题(压缩) */
  ParaisoDarkMin = 'paraiso-dark.min.css',
  /** Paraiso 浅色主题 */
  ParaisoLight = 'paraiso-light.css',
  /** Paraiso 浅色主题(压缩) */
  ParaisoLightMin = 'paraiso-light.min.css',
  /** Pojoaque 主题 */
  Pojoaque = 'pojoaque.css',
  /** 纯基础主题 */
  PureBasic = 'purebasic.css',
  /** 纯基础主题(压缩) */
  PureBasicMin = 'purebasic.min.css',
  /** Qt Creator 深色主题 */
  QtCreatorDark = 'qtcreator-dark.css',
  /** Qt Creator 深色主题(压缩) */
  QtCreatorDarkMin = 'qtcreator-dark.min.css',
  /** Qt Creator 浅色主题 */
  QtCreatorLight = 'qtcreator-light.css',
  /** Qt Creator 浅色主题(压缩) */
  QtCreatorLightMin = 'qtcreator-light.min.css',
  /** 彩虹主题 */
  Rainbow = 'rainbow.css',
  /** 彩虹主题(压缩) */
  RainbowMin = 'rainbow.min.css',
  /** RouterOS 主题 */
  RouterOs = 'routeros.css',
  /** RouterOS 主题(压缩) */
  RouterOsMin = 'routeros.min.css',
  /** 校书主题 */
  SchoolBook = 'school-book.css',
  /** 校书主题(压缩) */
  SchoolBookMin = 'school-book.min.css',
  /** 紫色阴影主题 */
  ShadesOfPurple = 'shades-of-purple.css',
  /** 紫色阴影主题(压缩) */
  ShadesOfPurpleMin = 'shades-of-purple.min.css',
  /** Srcery 主题 */
  Srcery = 'srcery.css',
  /** Srcery 主题(压缩) */
  SrceryMin = 'srcery.min.css',
  /** StackOverflow 深色主题 */
  StackOverflowDark = 'stackoverflow-dark.css',
  /** StackOverflow 深色主题(压缩) */
  StackOverflowDarkMin = 'stackoverflow-dark.min.css',
  /** StackOverflow 浅色主题 */
  StackOverflowLight = 'stackoverflow-light.css',
  /** StackOverflow 浅色主题(压缩) */
  StackOverflowLightMin = 'stackoverflow-light.min.css',
  /** Sunburst 主题 */
  Sunburst = 'sunburst.css',
  /** Sunburst 主题(压缩) */
  SunburstMin = 'sunburst.min.css',
  /** Tokyo Night 深色主题 */
  TokyoNightDark = 'tokyo-night-dark.css',
  /** Tokyo Night 深色主题(压缩) */
  TokyoNightDarkMin = 'tokyo-night-dark.min.css',
  /** Tokyo Night 浅色主题 */
  TokyoNightLight = 'tokyo-night-light.css',
  /** Tokyo Night 浅色主题(压缩) */
  TokyoNightLightMin = 'tokyo-night-light.min.css',
  /** 明天夜晚蓝色主题 */
  TomorrowNightBlue = 'tomorrow-night-blue.css',
  /** 明天夜晚蓝色主题(压缩) */
  TomorrowNightBlueMin = 'tomorrow-night-blue.min.css',
  /** 明天夜晚亮色主题 */
  TomorrowNightBright = 'tomorrow-night-bright.css',
  /** 明天夜晚亮色主题(压缩) */
  TomorrowNightBrightMin = 'tomorrow-night-bright.min.css',
  /** Visual Studio 主题 */
  Vs = 'vs.css',
  /** Visual Studio 主题(压缩) */
  VsMin = 'vs.min.css',
  /** Visual Studio 2015 主题 */
  Vs2015 = 'vs2015.css',
  /** Visual Studio 2015 主题(压缩) */
  Vs2015Min = 'vs2015.min.css',
  /** Xcode 主题 */
  Xcode = 'xcode.css',
  /** Xcode 主题(压缩) */
  XcodeMin = 'xcode.min.css',
  /** XT256 主题 */
  Xt256 = 'xt256.css',
  /** XT256 主题(压缩) */
  Xt256Min = 'xt256.min.css',
  CYBERTOPIA_CHERRY_MIN = 'cybertopia-cherry.min.css',
  CYBERTOPIA_DIMMER_MIN = 'cybertopia-dimmer.min.css',
  CYBERTOPIA_ICECAP_MIN = 'cybertopia-icecap.min.css',
  CYBERTOPIA_SATURATED_MIN = 'cybertopia-saturated.min.css',
  POJOAQUE_MIN = 'pojoaque.min.css',
  ROSE_PINE_DAWN_MIN = 'rose-pine-dawn.min.css',
  ROSE_PINE_MOON_MIN = 'rose-pine-moon.min.css',
  ROSE_PINE_MIN = 'rose-pine.min.css',
  BASE16_3024_MIN = 'base16/3024.min.css',
  BASE16_APATHY_MIN = 'base16/apathy.min.css',
  BASE16_APPRENTICE_MIN = 'base16/apprentice.min.css',
  BASE16_ASHES_MIN = 'base16/ashes.min.css',
  BASE16_ATELIER_CAVE_LIGHT_MIN = 'base16/atelier-cave-light.min.css',
  BASE16_ATELIER_CAVE_MIN = 'base16/atelier-cave.min.css',
  BASE16_ATELIER_DUNE_LIGHT_MIN = 'base16/atelier-dune-light.min.css',
  BASE16_ATELIER_DUNE_MIN = 'base16/atelier-dune.min.css',
  BASE16_ATELIER_ESTUARY_LIGHT_MIN = 'base16/atelier-estuary-light.min.css',
  BASE16_ATELIER_ESTUARY_MIN = 'base16/atelier-estuary.min.css',
  BASE16_ATELIER_FOREST_LIGHT_MIN = 'base16/atelier-forest-light.min.css',
  BASE16_ATELIER_FOREST_MIN = 'base16/atelier-forest.min.css',
  BASE16_ATELIER_HEATH_LIGHT_MIN = 'base16/atelier-heath-light.min.css',
  BASE16_ATELIER_HEATH_MIN = 'base16/atelier-heath.min.css',
  BASE16_ATELIER_LAKESIDE_LIGHT_MIN = 'base16/atelier-lakeside-light.min.css',
  BASE16_ATELIER_LAKESIDE_MIN = 'base16/atelier-lakeside.min.css',
  BASE16_ATELIER_PLATEAU_LIGHT_MIN = 'base16/atelier-plateau-light.min.css',
  BASE16_ATELIER_PLATEAU_MIN = 'base16/atelier-plateau.min.css',
  BASE16_ATELIER_SAVANNA_LIGHT_MIN = 'base16/atelier-savanna-light.min.css',
  BASE16_ATELIER_SAVANNA_MIN = 'base16/atelier-savanna.min.css',
  BASE16_ATELIER_SEASIDE_LIGHT_MIN = 'base16/atelier-seaside-light.min.css',
  BASE16_ATELIER_SEASIDE_MIN = 'base16/atelier-seaside.min.css',
  BASE16_ATELIER_SULPHURPOOL_LIGHT_MIN = 'base16/atelier-sulphurpool-light.min.css',
  BASE16_ATELIER_SULPHURPOOL_MIN = 'base16/atelier-sulphurpool.min.css',
  BASE16_ATLAS_MIN = 'base16/atlas.min.css',
  BASE16_BESPIN_MIN = 'base16/bespin.min.css',
  BASE16_BLACK_METAL_BATHORY_MIN = 'base16/black-metal-bathory.min.css',
  BASE16_BLACK_METAL_BURZUM_MIN = 'base16/black-metal-burzum.min.css',
  BASE16_BLACK_METAL_DARK_FUNERAL_MIN = 'base16/black-metal-dark-funeral.min.css',
  BASE16_BLACK_METAL_GORGOROTH_MIN = 'base16/black-metal-gorgoroth.min.css',
  BASE16_BLACK_METAL_IMMORTAL_MIN = 'base16/black-metal-immortal.min.css',
  BASE16_BLACK_METAL_KHOLD_MIN = 'base16/black-metal-khold.min.css',
  BASE16_BLACK_METAL_MARDUK_MIN = 'base16/black-metal-marduk.min.css',
  BASE16_BLACK_METAL_MAYHEM_MIN = 'base16/black-metal-mayhem.min.css',
  BASE16_BLACK_METAL_NILE_MIN = 'base16/black-metal-nile.min.css',
  BASE16_BLACK_METAL_VENOM_MIN = 'base16/black-metal-venom.min.css',
  BASE16_BLACK_METAL_MIN = 'base16/black-metal.min.css',
  BASE16_BREWER_MIN = 'base16/brewer.min.css',
  BASE16_BRIGHT_MIN = 'base16/bright.min.css',
  BASE16_BROGRAMMER_MIN = 'base16/brogrammer.min.css',
  BASE16_BRUSH_TREES_DARK_MIN = 'base16/brush-trees-dark.min.css',
  BASE16_BRUSH_TREES_MIN = 'base16/brush-trees.min.css',
  BASE16_CHALK_MIN = 'base16/chalk.min.css',
  BASE16_CIRCUS_MIN = 'base16/circus.min.css',
  BASE16_CLASSIC_DARK_MIN = 'base16/classic-dark.min.css',
  BASE16_CLASSIC_LIGHT_MIN = 'base16/classic-light.min.css',
  BASE16_CODESCHOOL_MIN = 'base16/codeschool.min.css',
  BASE16_COLORS_MIN = 'base16/colors.min.css',
  BASE16_CUPCAKE_MIN = 'base16/cupcake.min.css',
  BASE16_CUPERTINO_MIN = 'base16/cupertino.min.css',
  BASE16_DANQING_MIN = 'base16/danqing.min.css',
  BASE16_DARCULA_MIN = 'base16/darcula.min.css',
  BASE16_DARK_VIOLET_MIN = 'base16/dark-violet.min.css',
  BASE16_DARKMOSS_MIN = 'base16/darkmoss.min.css',
  BASE16_DARKTOOTH_MIN = 'base16/darktooth.min.css',
  BASE16_DECAF_MIN = 'base16/decaf.min.css',
  BASE16_DEFAULT_DARK_MIN = 'base16/default-dark.min.css',
  BASE16_DEFAULT_LIGHT_MIN = 'base16/default-light.min.css',
  BASE16_DIRTYSEA_MIN = 'base16/dirtysea.min.css',
  BASE16_DRACULA_MIN = 'base16/dracula.min.css',
  BASE16_EDGE_DARK_MIN = 'base16/edge-dark.min.css',
  BASE16_EDGE_LIGHT_MIN = 'base16/edge-light.min.css',
  BASE16_EIGHTIES_MIN = 'base16/eighties.min.css',
  BASE16_EMBERS_MIN = 'base16/embers.min.css',
  BASE16_EQUILIBRIUM_DARK_MIN = 'base16/equilibrium-dark.min.css',
  BASE16_EQUILIBRIUM_GRAY_DARK_MIN = 'base16/equilibrium-gray-dark.min.css',
  BASE16_EQUILIBRIUM_GRAY_LIGHT_MIN = 'base16/equilibrium-gray-light.min.css',
  BASE16_EQUILIBRIUM_LIGHT_MIN = 'base16/equilibrium-light.min.css',
  BASE16_ESPRESSO_MIN = 'base16/espresso.min.css',
  BASE16_EVA_DIM_MIN = 'base16/eva-dim.min.css',
  BASE16_EVA_MIN = 'base16/eva.min.css',
  BASE16_FLAT_MIN = 'base16/flat.min.css',
  BASE16_FRAMER_MIN = 'base16/framer.min.css',
  BASE16_FRUIT_SODA_MIN = 'base16/fruit-soda.min.css',
  BASE16_GIGAVOLT_MIN = 'base16/gigavolt.min.css',
  BASE16_GITHUB_MIN = 'base16/github.min.css',
  BASE16_GOOGLE_DARK_MIN = 'base16/google-dark.min.css',
  BASE16_GOOGLE_LIGHT_MIN = 'base16/google-light.min.css',
  BASE16_GRAYSCALE_DARK_MIN = 'base16/grayscale-dark.min.css',
  BASE16_GRAYSCALE_LIGHT_MIN = 'base16/grayscale-light.min.css',
  BASE16_GREEN_SCREEN_MIN = 'base16/green-screen.min.css',
  BASE16_GRUVBOX_DARK_HARD_MIN = 'base16/gruvbox-dark-hard.min.css',
  BASE16_GRUVBOX_DARK_MEDIUM_MIN = 'base16/gruvbox-dark-medium.min.css',
  BASE16_GRUVBOX_DARK_PALE_MIN = 'base16/gruvbox-dark-pale.min.css',
  BASE16_GRUVBOX_DARK_SOFT_MIN = 'base16/gruvbox-dark-soft.min.css',
  BASE16_GRUVBOX_LIGHT_HARD_MIN = 'base16/gruvbox-light-hard.min.css',
  BASE16_GRUVBOX_LIGHT_MEDIUM_MIN = 'base16/gruvbox-light-medium.min.css',
  BASE16_GRUVBOX_LIGHT_SOFT_MIN = 'base16/gruvbox-light-soft.min.css',
  BASE16_HARDCORE_MIN = 'base16/hardcore.min.css',
  BASE16_HARMONIC16_DARK_MIN = 'base16/harmonic16-dark.min.css',
  BASE16_HARMONIC16_LIGHT_MIN = 'base16/harmonic16-light.min.css',
  BASE16_HEETCH_DARK_MIN = 'base16/heetch-dark.min.css',
  BASE16_HEETCH_LIGHT_MIN = 'base16/heetch-light.min.css',
  BASE16_HELIOS_MIN = 'base16/helios.min.css',
  BASE16_HOPSCOTCH_MIN = 'base16/hopscotch.min.css',
  BASE16_HORIZON_DARK_MIN = 'base16/horizon-dark.min.css',
  BASE16_HORIZON_LIGHT_MIN = 'base16/horizon-light.min.css',
  BASE16_HUMANOID_DARK_MIN = 'base16/humanoid-dark.min.css',
  BASE16_HUMANOID_LIGHT_MIN = 'base16/humanoid-light.min.css',
  BASE16_IA_DARK_MIN = 'base16/ia-dark.min.css',
  BASE16_IA_LIGHT_MIN = 'base16/ia-light.min.css',
  BASE16_ICY_DARK_MIN = 'base16/icy-dark.min.css',
  BASE16_IR_BLACK_MIN = 'base16/ir-black.min.css',
  BASE16_ISOTOPE_MIN = 'base16/isotope.min.css',
  BASE16_KIMBER_MIN = 'base16/kimber.min.css',
  BASE16_LONDON_TUBE_MIN = 'base16/london-tube.min.css',
  BASE16_MACINTOSH_MIN = 'base16/macintosh.min.css',
  BASE16_MARRAKESH_MIN = 'base16/marrakesh.min.css',
  BASE16_MATERIA_MIN = 'base16/materia.min.css',
  BASE16_MATERIAL_DARKER_MIN = 'base16/material-darker.min.css',
  BASE16_MATERIAL_LIGHTER_MIN = 'base16/material-lighter.min.css',
  BASE16_MATERIAL_PALENIGHT_MIN = 'base16/material-palenight.min.css',
  BASE16_MATERIAL_VIVID_MIN = 'base16/material-vivid.min.css',
  BASE16_MATERIAL_MIN = 'base16/material.min.css',
  BASE16_MELLOW_PURPLE_MIN = 'base16/mellow-purple.min.css',
  BASE16_MEXICO_LIGHT_MIN = 'base16/mexico-light.min.css',
  BASE16_MOCHA_MIN = 'base16/mocha.min.css',
  BASE16_MONOKAI_MIN = 'base16/monokai.min.css',
  BASE16_NEBULA_MIN = 'base16/nebula.min.css',
  BASE16_NORD_MIN = 'base16/nord.min.css',
  BASE16_NOVA_MIN = 'base16/nova.min.css',
  BASE16_OCEAN_MIN = 'base16/ocean.min.css',
  BASE16_OCEANICNEXT_MIN = 'base16/oceanicnext.min.css',
  BASE16_ONE_LIGHT_MIN = 'base16/one-light.min.css',
  BASE16_ONEDARK_MIN = 'base16/onedark.min.css',
  BASE16_OUTRUN_DARK_MIN = 'base16/outrun-dark.min.css',
  BASE16_PAPERCOLOR_DARK_MIN = 'base16/papercolor-dark.min.css',
  BASE16_PAPERCOLOR_LIGHT_MIN = 'base16/papercolor-light.min.css',
  BASE16_PARAISO_MIN = 'base16/paraiso.min.css',
  BASE16_PASQUE_MIN = 'base16/pasque.min.css',
  BASE16_PHD_MIN = 'base16/phd.min.css',
  BASE16_PICO_MIN = 'base16/pico.min.css',
  BASE16_POP_MIN = 'base16/pop.min.css',
  BASE16_PORPLE_MIN = 'base16/porple.min.css',
  BASE16_QUALIA_MIN = 'base16/qualia.min.css',
  BASE16_RAILSCASTS_MIN = 'base16/railscasts.min.css',
  BASE16_REBECCA_MIN = 'base16/rebecca.min.css',
  BASE16_ROS_PINE_DAWN_MIN = 'base16/ros-pine-dawn.min.css',
  BASE16_ROS_PINE_MOON_MIN = 'base16/ros-pine-moon.min.css',
  BASE16_ROS_PINE_MIN = 'base16/ros-pine.min.css',
  BASE16_SAGELIGHT_MIN = 'base16/sagelight.min.css',
  BASE16_SANDCASTLE_MIN = 'base16/sandcastle.min.css',
  BASE16_SETI_UI_MIN = 'base16/seti-ui.min.css',
  BASE16_SHAPESHIFTER_MIN = 'base16/shapeshifter.min.css',
  BASE16_SILK_DARK_MIN = 'base16/silk-dark.min.css',
  BASE16_SILK_LIGHT_MIN = 'base16/silk-light.min.css',
  BASE16_SNAZZY_MIN = 'base16/snazzy.min.css',
  BASE16_SOLAR_FLARE_LIGHT_MIN = 'base16/solar-flare-light.min.css',
  BASE16_SOLAR_FLARE_MIN = 'base16/solar-flare.min.css',
  BASE16_SOLARIZED_DARK_MIN = 'base16/solarized-dark.min.css',
  BASE16_SOLARIZED_LIGHT_MIN = 'base16/solarized-light.min.css',
  BASE16_SPACEMACS_MIN = 'base16/spacemacs.min.css',
  BASE16_SUMMERCAMP_MIN = 'base16/summercamp.min.css',
  BASE16_SUMMERFRUIT_DARK_MIN = 'base16/summerfruit-dark.min.css',
  BASE16_SUMMERFRUIT_LIGHT_MIN = 'base16/summerfruit-light.min.css',
  BASE16_SYNTH_MIDNIGHT_TERMINAL_DARK_MIN = 'base16/synth-midnight-terminal-dark.min.css',
  BASE16_SYNTH_MIDNIGHT_TERMINAL_LIGHT_MIN = 'base16/synth-midnight-terminal-light.min.css',
  BASE16_TANGO_MIN = 'base16/tango.min.css',
  BASE16_TENDER_MIN = 'base16/tender.min.css',
  BASE16_TOMORROW_NIGHT_MIN = 'base16/tomorrow-night.min.css',
  BASE16_TOMORROW_MIN = 'base16/tomorrow.min.css',
  BASE16_TWILIGHT_MIN = 'base16/twilight.min.css',
  BASE16_UNIKITTY_DARK_MIN = 'base16/unikitty-dark.min.css',
  BASE16_UNIKITTY_LIGHT_MIN = 'base16/unikitty-light.min.css',
  BASE16_VULCAN_MIN = 'base16/vulcan.min.css',
  BASE16_WINDOWS_10_LIGHT_MIN = 'base16/windows-10-light.min.css',
  BASE16_WINDOWS_10_MIN = 'base16/windows-10.min.css',
  BASE16_WINDOWS_95_LIGHT_MIN = 'base16/windows-95-light.min.css',
  BASE16_WINDOWS_95_MIN = 'base16/windows-95.min.css',
  BASE16_WINDOWS_HIGH_CONTRAST_LIGHT_MIN = 'base16/windows-high-contrast-light.min.css',
  BASE16_WINDOWS_HIGH_CONTRAST_MIN = 'base16/windows-high-contrast.min.css',
  BASE16_WINDOWS_NT_LIGHT_MIN = 'base16/windows-nt-light.min.css',
  BASE16_WINDOWS_NT_MIN = 'base16/windows-nt.min.css',
  BASE16_WOODLAND_MIN = 'base16/woodland.min.css',
  BASE16_XCODE_DUSK_MIN = 'base16/xcode-dusk.min.css',
  BASE16_ZENBURN_MIN = 'base16/zenburn.min.css'
}

// /**
//  * 生成Highlight.js主题名称
//  */
// const getHighlightThemeName = async () => {
//   const toSnakeUpperCase = (input: string) => {
//     /** 去掉文件扩展名 */
//     const withoutExt = input.replace(/\.[^/.]+$/, '')
//     /** 将非字母数字的字符转换为下划线 */
//     const snake = withoutExt.replace(/[^a-zA-Z0-9]/g, '_')
//     let key = snake.toUpperCase()
//     /** 如果首字母是数字 则添加一个下划线 */
//     if (/^\d/.test(key)) {
//       key = `_${key}`
//     }

//     return { key, value: input }
//   }

//   const { default: fs } = await import('fs')

//   const list: { key: string; value: string }[] = []
//   fs.readdirSync('node_modules/highlight.js/styles').forEach(item => {
//     if (!item.includes('min.css')) return
//     list.push(toSnakeUpperCase(item))
//   })

//   fs.readdirSync('node_modules/highlight.js/styles/base16').forEach(item => {
//     if (!item.includes('min.css')) return
//     const key = `base16/${item}`
//     list.push(toSnakeUpperCase(key))
//   })

//   /** 检查是否存在重复的值 从HighlightJsThemes中 如果重复则删除list中的重复值 */
//   const themes = Object.values(HighlightJsThemes)
//   const resultList = list.filter(item => !themes.includes(item.value as HighlightJsThemes))
//   console.log(resultList.map(item => `${item.key} = '${item.value}',`).join('\n'))
// }

// getHighlightThemeName()
