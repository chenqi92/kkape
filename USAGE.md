# 使用指南 / Usage Guide

## 🚀 快速开始

### 1. 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:4321 查看网站

### 2. 构建和预览

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📝 添加新工具

### 简单方式

编辑 `src/data/tools.ts`，在 `tools` 数组末尾添加新工具：

```typescript
{
  id: 'my-awesome-tool',           // 唯一标识符
  slug: 'my-awesome-tool',         // URL 路径
  category: 'desktop',             // desktop | library | web | plugin
  name: {
    zh: '我的超棒工具',
    en: 'My Awesome Tool'
  },
  tagline: {
    zh: '一句话介绍你的工具',
    en: 'One-line description of your tool'
  },
  description: {
    zh: '详细描述你的工具...',
    en: 'Detailed description...'
  },
  icon: '🚀',                      // 使用 emoji 作为图标
  links: {
    website: 'https://example.com',
    github: 'https://github.com/user/repo'
  },
  features: {
    zh: ['功能1', '功能2', '功能3'],
    en: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  techStack: ['React', 'Node.js'],
  tags: ['web', 'tool', 'productivity']
}
```

### 完整配置

```typescript
{
  id: 'advanced-tool',
  slug: 'advanced-tool',
  category: 'web',
  name: {
    zh: '高级工具',
    en: 'Advanced Tool'
  },
  tagline: {
    zh: '强大的在线工具',
    en: 'Powerful online tool'
  },
  description: {
    zh: '这是一个功能强大的在线工具...',
    en: 'This is a powerful online tool...'
  },
  icon: '⚡',
  image: '/images/tool-preview.png',  // 可选：工具预览图
  links: {
    website: 'https://example.com',
    github: 'https://github.com/user/repo',
    download: 'https://example.com/download',  // 可选
    demo: 'https://demo.example.com',          // 可选
    docs: 'https://docs.example.com'           // 可选
  },
  features: {
    zh: [
      '支持多种格式',
      '实时预览',
      '离线使用',
      '完全免费'
    ],
    en: [
      'Support multiple formats',
      'Real-time preview',
      'Offline usage',
      'Completely free'
    ]
  },
  techStack: ['Vue.js', 'TypeScript', 'Vite'],
  installation: {                              // 可选：安装说明
    zh: '```bash\nnpm install my-tool\n```',
    en: '```bash\nnpm install my-tool\n```'
  },
  demo: {                                      // 可选：演示配置
    type: 'interactive',                       // video | interactive | images
    url: 'https://demo.example.com',
    description: {
      zh: '点击体验在线演示',
      en: 'Click to try live demo'
    }
  },
  tags: ['web', 'converter', 'tool'],
  screenshots: [                               // 可选：截图列表
    '/images/screenshot1.png',
    '/images/screenshot2.png'
  ],
  relatedTools: ['other-tool-id']              // 可选：相关工具
}
```

## 🎨 自定义样式

### 修改主题色

编辑 `tailwind.config.mjs`：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... 修改你想要的颜色
        600: '#0284c7',  // 主要使用的颜色
      },
    },
  },
}
```

### 修改全局样式

编辑 `src/styles/global.css`：

```css
:root {
  --color-bg-primary: 255 255 255;
  --color-text-primary: 17 24 39;
  /* ... */
}

.dark {
  --color-bg-primary: 17 24 39;
  --color-text-primary: 243 244 246;
  /* ... */
}
```

## 🌐 国际化

### 添加新的翻译

1. 编辑 `src/i18n/zh.json`（中文）
2. 编辑 `src/i18n/en.json`（英文）

确保两个文件的键值对应。

### 在组件中使用翻译

```astro
---
import { getLangFromUrl, useTranslations } from '@i18n/index';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
```

## 📦 部署到 Cloudflare Pages

### 方式一：通过 GitHub（推荐）

1. 推送代码到 GitHub
2. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Pages → 创建项目 → 连接到 Git
4. 选择仓库
5. 配置：
   - 构建命令: `npm run build`
   - 构建输出目录: `dist`
   - Node 版本: 20

### 方式二：使用 Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist
```

## 🔧 常见问题

### Q: 如何添加图片？

A: 将图片放在 `public/images/` 目录下，然后在工具配置中引用：

```typescript
image: '/images/my-tool.png'
```

### Q: 如何添加视频演示？

A: 在工具配置中添加 demo 字段：

```typescript
demo: {
  type: 'video',
  url: 'https://www.youtube.com/embed/VIDEO_ID'
}
```

### Q: 如何修改网站标题？

A: 编辑 `src/i18n/zh.json` 和 `src/i18n/en.json` 中的 `site.title`。

### Q: 构建失败怎么办？

A:
1. 确保 Node 版本是 20
2. 删除 `node_modules` 和 `package-lock.json`，重新 `npm install`
3. 检查 `src/data/tools.ts` 中的配置是否正确
4. 查看错误日志，修复语法错误

## 📚 更多资源

- [Astro 文档](https://docs.astro.build/)
- [TailwindCSS 文档](https://tailwindcss.com/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

## 💡 最佳实践

1. **工具 ID 和 slug 保持一致**，使用小写字母和连字符
2. **始终提供中英文翻译**，保证双语体验
3. **使用有意义的 emoji 图标**，增强视觉效果
4. **添加详细的功能列表**，让用户快速了解工具
5. **提供演示链接**，方便用户体验工具
6. **定期更新工具信息**，保持内容新鲜
