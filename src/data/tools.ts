export type ToolCategory = 'desktop' | 'library' | 'web' | 'plugin';

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
  screenshots?: string[];
  relatedTools?: string[];
}

export const tools: Tool[] = [
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
    icon: '📊',
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
    icon: '🔧',
    links: {
      website: 'https://proto.kkape.com/zh/',
      github: 'https://github.com/chenqi92/proto'
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
    icon: '📑',
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
    icon: '🧪',
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
