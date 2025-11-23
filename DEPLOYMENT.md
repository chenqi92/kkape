# 部署到 Cloudflare Pages

本项目可以轻松部署到 Cloudflare Pages。

## 🚀 推荐部署方式：通过 GitHub 自动部署

这是最简单和推荐的部署方式：

### 步骤

1. **推送代码到 GitHub**（已完成）

2. **登录 Cloudflare Dashboard**
   - 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 **Pages** 部分

3. **创建新项目**
   - 点击 **创建项目**
   - 选择 **连接到 Git**
   - 授权 Cloudflare 访问你的 GitHub 账户
   - 选择 `kkape` 仓库

4. **配置构建设置**
   ```
   项目名称: tool-showcase (或自定义)
   生产分支: main (或你的主分支)
   框架预设: Astro
   构建命令: npm run build
   构建输出目录: dist
   根目录: /
   ```

5. **环境变量**（可选）
   - Node 版本: 20（通过 .node-version 文件自动检测）

6. **保存并部署**
   - 点击 **保存并部署**
   - 等待首次构建完成（通常 1-2 分钟）

### 自动部署

配置完成后：
- 每次推送到主分支时自动部署
- 推送到其他分支会创建预览部署
- 部署状态会显示在 GitHub commit 上

## 📦 方式二：使用 Wrangler CLI 手动部署

如果你想手动部署或测试：

### 前置要求
```bash
# 安装依赖
npm install
```

### 部署步骤

```bash
# 1. 构建项目
npm run build

# 2. 登录 Cloudflare（首次需要）
npx wrangler login

# 3. 部署到 Pages
npx wrangler pages deploy dist --project-name=tool-showcase

# 或使用快捷命令
npm run deploy
```

### 首次部署

首次使用 Wrangler 部署时：
1. 运行 `npx wrangler login` 进行身份验证
2. 浏览器会打开 Cloudflare 授权页面
3. 授权后回到终端继续部署

## 🔧 构建配置说明

### package.json 脚本

```json
{
  "scripts": {
    "dev": "astro dev",          // 本地开发
    "build": "astro build",      // 构建生产版本
    "preview": "astro preview",  // 预览构建结果
    "deploy": "npm run build && npx wrangler pages deploy dist"  // 构建并部署
  }
}
```

### .node-version

项目包含 `.node-version` 文件，指定 Node.js 20，Cloudflare Pages 会自动识别。

## 🌐 自定义域名

### 添加自定义域名

1. 在 Cloudflare Pages 项目中
2. 进入 **自定义域** 选项卡
3. 点击 **设置自定义域**
4. 输入你的域名（例如：tools.yourdomain.com）
5. 按照提示添加 DNS 记录

### DNS 配置

如果域名已经在 Cloudflare：
- 自动配置 DNS 记录
- 自动启用 HTTPS

如果域名在其他服务商：
- 添加 CNAME 记录指向 Cloudflare Pages
- 或将域名迁移到 Cloudflare

## ⚡ 性能优化

项目已包含以下优化：

### 构建优化
- ✅ 静态站点生成（SSG）- 所有页面预渲染
- ✅ 自动代码分割 - 按页面加载必要代码
- ✅ TailwindCSS JIT - 只包含使用的样式
- ✅ 资源压缩 - HTML/CSS/JS 自动压缩

### Cloudflare 优化
- ✅ 全球 CDN - 300+ 边缘节点
- ✅ 自动 HTTPS - 免费 SSL 证书
- ✅ HTTP/3 支持 - 更快的连接
- ✅ Brotli 压缩 - 更小的传输体积

## 🔍 故障排除

### 构建失败

**问题**: 构建过程中出现错误

**解决方案**:
```bash
# 1. 清理并重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 2. 本地测试构建
npm run build

# 3. 检查 Node 版本
node --version  # 应该是 v20.x.x
```

### 路由问题

**问题**: 页面路由不工作或出现 404

**解决方案**:
- 检查 `astro.config.mjs` 中的 i18n 配置
- 确保所有页面都在 `src/pages/` 目录下
- 查看构建日志确认所有页面都已生成

### 样式问题

**问题**: 样式没有正确加载

**解决方案**:
```bash
# 重新构建并检查输出
npm run build

# 检查 dist/_astro/ 目录是否包含 CSS 文件
ls -la dist/_astro/
```

### 部署权限问题

**问题**: Wrangler 部署时权限被拒绝

**解决方案**:
```bash
# 重新登录
npx wrangler logout
npx wrangler login

# 确认账户
npx wrangler whoami
```

## 📊 部署后检查

部署成功后，检查以下内容：

- [ ] 首页正常加载
- [ ] 中英文切换工作正常
- [ ] 亮暗主题切换正常
- [ ] 工具卡片正确显示
- [ ] 工具详情页可以访问
- [ ] 移动端显示正常
- [ ] 所有链接可以点击

## 🔗 相关资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Astro 部署指南](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)

## 💡 最佳实践

1. **使用 Git 自动部署** - 推送代码自动构建
2. **启用预览部署** - 在合并前测试更改
3. **监控构建日志** - 及时发现问题
4. **使用自定义域名** - 提升专业性
5. **定期更新依赖** - 保持安全性和性能
