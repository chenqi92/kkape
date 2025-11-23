# 部署到 Cloudflare Pages

本项目可以轻松部署到 Cloudflare Pages。

## 自动部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 选择 **Pages** → **创建项目** → **连接到 Git**
4. 选择你的 GitHub 仓库
5. 配置构建设置：
   - **框架预设**: Astro
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node 版本**: 20
6. 点击 **保存并部署**

每次推送到主分支时，Cloudflare Pages 会自动构建和部署。

## 手动部署

如果你想手动部署：

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 使用 Wrangler CLI 部署
npx wrangler pages deploy dist
```

## 环境变量

目前项目不需要任何环境变量。如果将来需要，可以在 Cloudflare Pages 设置中配置。

## 自定义域名

1. 在 Cloudflare Pages 项目设置中
2. 选择 **自定义域**
3. 添加你的域名
4. 按照说明配置 DNS 记录

## 性能优化

项目已经包含以下优化：
- 静态站点生成（SSG）
- TailwindCSS 的 JIT 编译
- 图片优化（可选）
- 自动代码分割

## 故障排除

如果遇到构建问题：

1. 检查 Node 版本是否为 20
2. 确保所有依赖已正确安装
3. 查看 Cloudflare Pages 构建日志
4. 本地运行 `npm run build` 检查是否有错误
