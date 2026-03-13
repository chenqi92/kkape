export type ToolCategory = 'desktop' | 'library' | 'web' | 'plugin' | 'mobile';

export interface ToolDemo {
  type: 'video' | 'interactive' | 'images';
  url?: string;
  embedCode?: string;
  images?: string[];
  description?: {
    zh: string;
    en: string;
  };
}

export interface Tool {
  id: string;
  slug: string;
  category: ToolCategory;
  name: {
    zh: string;
    en: string;
  };
  tagline: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  icon?: string;
  image?: string;
  screenshots?: string[];
  links: {
    website?: string;
    github?: string;
    download?: string;
    demo?: string;
    docs?: string;
  };
  features: {
    zh: string[];
    en: string[];
  };
  techStack: string[];
  installation?: {
    zh: string;
    en: string;
  };
  demo?: ToolDemo;
  tags: string[];
  relatedTools?: string[];
}

export const tools: Tool[] = [
  {
    id: 'nanolink',
    slug: 'nanolink',
    category: 'desktop',
    name: {
      zh: 'NanoLink',
      en: 'NanoLink'
    },
    tagline: {
      zh: '轻量级跨平台服务器监控系统',
      en: 'Lightweight Cross-Platform Server Monitoring'
    },
    description: {
      zh: 'NanoLink 是一个轻量级、跨平台的服务器监控系统，采用 Rust 编写的高性能 Agent，支持 gRPC + Protobuf 通信，提供 Java/Go/Python 多语言 SDK，内置 Vue 3 Dashboard 和 MCP AI 集成。',
      en: 'NanoLink is a lightweight, cross-platform server monitoring system with a high-performance Rust agent, gRPC + Protobuf communication, multi-language SDKs (Java/Go/Python), Vue 3 dashboard, and MCP AI integration.'
    },
    icon: 'server',
    screenshots: ['/images/tools/nanolink-1.png', '/images/tools/nanolink-2.png'],
    links: {
      github: 'https://github.com/chenqi92/NanoLink'
    },
    features: {
      zh: [
        'Rust Agent 跨平台支持（Windows/macOS/Linux）',
        'CPU/内存/磁盘/网络/GPU 全方位监控',
        'gRPC + Protobuf + TLS 安全通信',
        'Java/Go/Python 多语言 SDK',
        'Vue 3 实时 Dashboard',
        'MCP AI/LLM 智能集成',
        '10 分钟离线数据环形缓存',
        '多服务器管理与自动重连',
        'Docker 一键部署'
      ],
      en: [
        'Rust agent with cross-platform support (Windows/macOS/Linux)',
        'Full monitoring: CPU, Memory, Disk, Network, GPU',
        'gRPC + Protobuf + TLS secure communication',
        'Multi-language SDKs: Java, Go, Python',
        'Vue 3 real-time dashboard',
        'MCP AI/LLM integration',
        '10-minute offline ring buffer cache',
        'Multi-server management with auto-reconnect',
        'Docker one-click deployment'
      ]
    },
    techStack: ['Rust', 'gRPC', 'Vue 3', 'TypeScript', 'Docker'],
    tags: ['monitoring', 'server', 'rust', 'grpc', 'cross-platform']
  },
  {
    id: 'deliver-helper',
    slug: 'deliver-helper',
    category: 'desktop',
    name: {
      zh: '交付助手',
      en: 'Deliver Helper'
    },
    tagline: {
      zh: '一站式软件交付文档生成工具',
      en: 'All-in-One Software Delivery Document Generator'
    },
    description: {
      zh: '交付助手是一款强大的桌面工具，集成了软著代码生成、接口文档生成、数据库文档生成、需求规格说明书 (SRS)、系统设计说明书 (SDD) 等功能，并深度集成 AI 大模型辅助文档撰写。',
      en: 'Deliver Helper is a powerful desktop tool integrating copyright code generation, API documentation, database documentation, SRS, SDD, and deep AI/LLM integration for assisted document writing.'
    },
    icon: 'wrench',
    screenshots: ['/images/tools/deliver-helper-1.png', '/images/tools/deliver-helper-2.png'],
    links: {
      github: 'https://github.com/chenqi92/delier-helper'
    },
    features: {
      zh: [
        '软著代码生成（智能清洗、精确分页、Word 预览）',
        '多语言接口文档生成（Java/Go/Python/Rust）',
        '数据库文档生成（MySQL/PostgreSQL）',
        '需求规格说明书 (SRS) 模板与 AI 填充',
        '系统设计说明书 (SDD) 自动生成',
        '集成 13+ AI 大模型提供商',
        '支持 Ollama/LM Studio 本地模型',
        '深色/浅色主题切换',
        'Rust 后端高性能文件处理'
      ],
      en: [
        'Copyright code generation (smart cleaning, precise pagination, Word preview)',
        'Multi-language API doc generation (Java/Go/Python/Rust)',
        'Database documentation (MySQL/PostgreSQL)',
        'SRS template with AI-powered content filling',
        'SDD auto-generation',
        '13+ AI/LLM provider integration',
        'Local model support (Ollama/LM Studio)',
        'Dark/Light theme switching',
        'High-performance Rust backend for file I/O'
      ]
    },
    techStack: ['Tauri 2.0', 'Rust', 'Vue 3', 'TypeScript'],
    tags: ['documentation', 'delivery', 'ai', 'desktop', 'tauri']
  },
  {
    id: 'geo-collector',
    slug: 'geo-collector',
    category: 'desktop',
    name: {
      zh: 'GeoCollector',
      en: 'GeoCollector'
    },
    tagline: {
      zh: '多平台地理数据采集与瓦片下载工具',
      en: 'Multi-Platform GIS Data Collection & Tile Downloader'
    },
    description: {
      zh: 'GeoCollector 是一款功能全面的地理数据采集工具，支持天地图、高德、百度、OSM 等多平台 POI 采集，瓦片地图下载（支持 8+ 地图源），航标数据采集，并提供丰富的数据导出格式。',
      en: 'GeoCollector is a comprehensive GIS data collection tool supporting multi-platform POI collection (Tianditu, Amap, Baidu, OSM), tile map downloading (8+ map sources), buoy data collection, and multiple export formats.'
    },
    icon: 'chart',
    screenshots: ['/images/tools/geo-collector-1.png', '/images/tools/geo-collector-2.png'],
    links: {
      github: 'https://github.com/chenqi92/poi-collector'
    },
    features: {
      zh: [
        '天地图/高德/百度/OSM 多平台 POI 采集',
        '长江航道航标数据自动采集',
        '8+ 地图源瓦片下载（谷歌、百度、天地图等）',
        '矩形框选 / 行政区域两种区域选择模式',
        '多级别缩放（1-20 级）与并发控制',
        '断点续传与失败重试',
        'MBTiles / ZIP / 文件夹多种输出格式',
        'API Key 自动轮换',
        '列表/地图/分屏三种数据查看视图'
      ],
      en: [
        'Multi-platform POI collection (Tianditu/Amap/Baidu/OSM)',
        'Yangtze River buoy data auto-collection',
        '8+ map source tile downloading (Google, Baidu, Tianditu, etc.)',
        'Rectangle / administrative region area selection modes',
        'Multi-level zoom (1-20) with concurrency control',
        'Resume download & retry on failure',
        'MBTiles / ZIP / folder output formats',
        'Automatic API key rotation',
        'List / Map / Split-view data browsing'
      ]
    },
    techStack: ['Tauri 2.0', 'Rust', 'React', 'TypeScript', 'SQLite'],
    tags: ['gis', 'poi', 'tiles', 'map', 'desktop', 'tauri']
  },
  {
    id: 'inflowave',
    slug: 'inflowave',
    category: 'desktop',
    name: {
      zh: 'InfloWave',
      en: 'InfloWave'
    },
    tagline: {
      zh: '现代化时间序列数据库管理工具',
      en: 'Modern Time-Series Database Management Tool'
    },
    description: {
      zh: 'InfloWave 是一款专为时间序列数据库设计的现代化管理工具，提供直观的界面和强大的数据可视化功能，支持多种主流时间序列数据库。',
      en: 'InfloWave is a modern management tool designed specifically for time-series databases, offering an intuitive interface and powerful data visualization capabilities, supporting multiple mainstream time-series databases.'
    },
    icon: 'chart',
    screenshots: ['/images/tools/inflowave-1.png', '/images/tools/inflowave-2.png'],
    links: {
      website: 'https://inflowave.kkape.com/',
      github: 'https://github.com/chenqi92/inflowave'
    },
    features: {
      zh: [
        '支持多种时间序列数据库（InfluxDB、Prometheus等）',
        '实时数据监控和可视化',
        '直观的查询构建器',
        '数据导入导出功能',
        '自定义仪表板',
        '跨平台支持（Windows、macOS、Linux）'
      ],
      en: [
        'Support for multiple time-series databases (InfluxDB, Prometheus, etc.)',
        'Real-time data monitoring and visualization',
        'Intuitive query builder',
        'Data import/export functionality',
        'Customizable dashboards',
        'Cross-platform support (Windows, macOS, Linux)'
      ]
    },
    techStack: ['Electron', 'TypeScript', 'React', 'TailwindCSS'],
    tags: ['database', 'time-series', 'desktop', 'monitoring'],
    demo: {
      type: 'images',
      description: {
        zh: 'InfloWave 提供了简洁现代的用户界面，让时间序列数据管理变得简单高效。',
        en: 'InfloWave provides a clean and modern user interface, making time-series data management simple and efficient.'
      }
    }
  },
  {
    id: 'proto',
    slug: 'proto',
    category: 'web',
    name: {
      zh: 'Proto',
      en: 'Proto'
    },
    tagline: {
      zh: 'Protobuf 在线工具',
      en: 'Protobuf Online Tool'
    },
    description: {
      zh: 'Proto 是一款强大的 Protobuf 在线工具，提供 Protobuf 消息的编码、解码、格式化等功能，支持多种编程语言的代码生成。',
      en: 'Proto is a powerful online tool for Protobuf, providing encoding, decoding, formatting and other functions for Protobuf messages, supporting code generation for multiple programming languages.'
    },
    icon: 'wrench',
    screenshots: ['/images/tools/proto-1.png', '/images/tools/proto-2.png'],
    links: {
      website: 'https://proto.kkape.com/zh/',
      github: 'https://github.com/chenqi92/keke-proto-tool'
    },
    features: {
      zh: [
        'Protobuf 消息编码/解码',
        '在线格式化和验证',
        '多语言代码生成（Java、Go、Python等）',
        '支持 Proto2 和 Proto3',
        '实时预览',
        '深色/浅色主题切换'
      ],
      en: [
        'Protobuf message encoding/decoding',
        'Online formatting and validation',
        'Multi-language code generation (Java, Go, Python, etc.)',
        'Support for Proto2 and Proto3',
        'Real-time preview',
        'Dark/Light theme toggle'
      ]
    },
    techStack: ['Vue.js', 'TypeScript', 'Protobuf.js', 'TailwindCSS'],
    tags: ['protobuf', 'web', 'tool', 'development'],
    demo: {
      type: 'interactive',
      url: 'https://proto.kkape.com/zh/',
      description: {
        zh: '访问在线演示体验完整功能',
        en: 'Visit the live demo to experience full functionality'
      }
    }
  },
  {
    id: 'allbs-excel',
    slug: 'allbs-excel',
    category: 'library',
    name: {
      zh: 'Allbs Excel',
      en: 'Allbs Excel'
    },
    tagline: {
      zh: 'Spring Boot Excel 导入导出增强工具',
      en: 'Spring Boot Excel Import/Export Enhancement Tool'
    },
    description: {
      zh: '基于 EasyExcel 的 Spring Boot Excel 导入导出增强工具，通过注解即可实现 Excel 的导入导出功能，支持多种高级特性如数据验证、字典转换、数据脱敏等。',
      en: 'An enhanced Excel import/export tool for Spring Boot based on EasyExcel. Implement Excel import/export functionality through annotations, supporting advanced features such as data validation, dictionary conversion, data masking, etc.'
    },
    icon: 'table',
    screenshots: ['/images/tools/allbs-excel-1.png', '/images/tools/allbs-excel-2.png'],
    links: {
      github: 'https://github.com/chenqi92/allbs-excel',
      docs: 'https://github.com/chenqi92/allbs-excel/blob/master/README.md'
    },
    features: {
      zh: [
        '注解驱动的导入导出',
        '单/多 Sheet 支持',
        '模板导出功能',
        '数据验证和脱敏',
        '字典转换',
        '国际化表头支持',
        '嵌套对象导出/导入',
        '条件样式和动态表头',
        '公式、冻结窗格、条件格式',
        '批注、图片、加密、水印',
        '进度回调监听'
      ],
      en: [
        'Annotation-driven import/export',
        'Single/Multiple sheet support',
        'Template export functionality',
        'Data validation and masking',
        'Dictionary conversion',
        'Internationalized header support',
        'Nested object export/import',
        'Conditional styling and dynamic headers',
        'Formulas, freeze panes, conditional formatting',
        'Comments, images, encryption, watermarks',
        'Progress callback monitoring'
      ]
    },
    techStack: ['Spring Boot', 'EasyExcel', 'Java 17+'],
    installation: {
      zh: `Maven 依赖：
\`\`\`xml
<dependency>
    <groupId>cn.allbs</groupId>
    <artifactId>allbs-excel</artifactId>
    <version>3.0.0</version>
</dependency>
\`\`\`

基本使用：
1. 在实体类字段上添加 @ExcelProperty 注解
2. 在 Controller 方法上添加 @ExportExcel 注解用于导出
3. 在 Controller 参数上添加 @ImportExcel 注解用于导入`,
      en: `Maven Dependency:
\`\`\`xml
<dependency>
    <groupId>cn.allbs</groupId>
    <artifactId>allbs-excel</artifactId>
    <version>3.0.0</version>
</dependency>
\`\`\`

Basic Usage:
1. Add @ExcelProperty annotation to entity class fields
2. Add @ExportExcel annotation to Controller methods for export
3. Add @ImportExcel annotation to Controller parameters for import`
    },
    tags: ['java', 'spring-boot', 'excel', 'library'],
    relatedTools: ['allbs-excel-test']
  },
  {
    id: 'allbs-excel-test',
    slug: 'allbs-excel-test',
    category: 'web',
    name: {
      zh: 'Allbs Excel 测试工具',
      en: 'Allbs Excel Test Tool'
    },
    tagline: {
      zh: 'Allbs Excel 功能演示和测试平台',
      en: 'Allbs Excel Feature Demo and Test Platform'
    },
    description: {
      zh: 'Allbs Excel 的配套测试展示工具，提供了完整的功能演示和在线测试环境，帮助开发者快速了解和体验 Allbs Excel 的各种特性。',
      en: 'A companion test and demo tool for Allbs Excel, providing comprehensive feature demonstrations and an online testing environment to help developers quickly understand and experience the various features of Allbs Excel.'
    },
    icon: 'flask',
    screenshots: ['/images/tools/allbs-excel-test-1.png', '/images/tools/allbs-excel-test-2.png'],
    links: {
      github: 'https://github.com/chenqi92/allbs-excel-test',
      demo: 'https://github.com/chenqi92/allbs-excel-test'
    },
    features: {
      zh: [
        '完整的功能演示案例',
        '在线测试环境',
        '导入导出示例',
        '各种高级特性展示',
        '代码示例参考',
        'API 接口测试'
      ],
      en: [
        'Complete feature demonstration cases',
        'Online testing environment',
        'Import/export examples',
        'Various advanced features showcase',
        'Code example references',
        'API interface testing'
      ]
    },
    techStack: ['Spring Boot', 'Allbs Excel', 'Vue.js', 'Element UI'],
    tags: ['java', 'spring-boot', 'excel', 'demo'],
    relatedTools: ['allbs-excel']
  },
  {
    id: 'kknas',
    slug: 'kknas',
    category: 'mobile',
    name: {
      zh: 'kknas',
      en: 'kknas'
    },
    tagline: {
      zh: 'NAS 文件与媒体管理',
      en: 'NAS File & Media Management'
    },
    description: {
      zh: 'kknas 是一款功能丰富的 NAS 管理应用，支持文件浏览、视频播放、音乐管理、远程终端等功能。通过局域网自动发现设备，提供流畅的多媒体体验。',
      en: 'kknas is a feature-rich NAS management app supporting file browsing, video playback, music management, remote terminal, and more. Auto-discovers devices on LAN and provides a smooth multimedia experience.'
    },
    icon: 'server',
    screenshots: ['/images/tools/kknas-1.png', '/images/tools/kknas-2.png'],
    links: {
      website: 'https://kkape.com/tools/kknas'
    },
    features: {
      zh: [
        '局域网 NAS 设备自动发现',
        'SMB / WebDAV / SFTP 多协议支持',
        '视频在线播放与画中画',
        '音乐播放与歌词显示',
        '照片浏览与管理',
        '电子书阅读',
        '文件上传与下载',
        '实时活动与桌面小组件',
        '支持 iOS 与 macOS'
      ],
      en: [
        'Auto-discover NAS devices on LAN',
        'SMB / WebDAV / SFTP multi-protocol support',
        'Video streaming with Picture-in-Picture',
        'Music playback with lyrics display',
        'Photo browsing and management',
        'E-book reading',
        'File upload and download',
        'Live Activities & desktop widgets',
        'iOS & macOS support'
      ]
    },
    techStack: ['Flutter', 'Dart', 'Swift', 'SwiftUI'],
    tags: ['nas', 'ios', 'macos', 'media', 'file-manager']
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter(tool => tool.category === category);
}

export function getRelatedTools(toolId: string): Tool[] {
  const tool = tools.find(t => t.id === toolId);
  if (!tool || !tool.relatedTools) return [];

  return tools.filter(t => tool.relatedTools?.includes(t.id));
}
