# 🔧 Cloudflare Pages 部署故障排除

## 问题：部署后只显示 "Hello World" 或空白页面

这个问题通常是由于 Cloudflare Pages 部署了错误的内容。以下是解决方案：

---

## ✅ 解决方案 1：检查并更新构建配置

### 第 1 步：登录 Cloudflare Dashboard

访问 https://dash.cloudflare.com/ 并进入你的 Pages 项目

### 第 2 步：检查构建设置

确保以下配置**完全正确**：

```
生产分支: main
框架预设: Astro
构建命令: npm run build
构建输出目录: dist
根目录: /（留空或填 /）
Node 版本: 20（会自动从 .node-version 读取）
```

### 第 3 步：触发重新部署

有两种方式：

**方式 A：在 Cloudflare Dashboard 中**
1. 进入项目的 **Deployments** 页面
2. 找到最新的部署
3. 点击右侧的 **···** 菜单
4. 选择 **Retry deployment**（重试部署）

**方式 B：推送一个空提交**
```bash
# 注意：由于权限限制，你需要在 GitHub 上手动操作
# 或者创建一个新的 Pull Request 到 main 分支
```

---

## ✅ 解决方案 2：检查部署日志

### 查看构建日志

1. 在 Cloudflare Pages 项目中，点击 **Deployments**
2. 点击最新的部署记录
3. 查看 **Build logs**（构建日志）

### 正确的构建日志应该显示：

```
> astro build

✓ building client (vite)
✓ generating static routes
✓ 10 page(s) built
✓ Complete!
```

### 常见错误及解决方案

**错误 1: "Command not found: astro"**
```
原因: 依赖未正确安装
解决: 确保构建命令是 npm run build，不是 astro build
```

**错误 2: "Cannot find module..."**
```
原因: Node 版本不匹配
解决: 确保 Node 版本为 20（检查 .node-version 文件）
```

**错误 3: "Build failed"**
```
原因: 构建配置错误
解决: 检查根目录设置，应该是 / 或留空
```

---

## ✅ 解决方案 3：创建新的部署

如果上述方法都不起作用，删除旧项目并重新创建：

### 第 1 步：删除旧项目（可选）

1. 在 Cloudflare Pages 中进入项目
2. 点击 **Settings**
3. 滚动到底部，点击 **Delete project**

### 第 2 步：创建新项目

按照以下步骤创建全新的项目：

1. 点击 **Create a project**
2. 选择 **Connect to Git**
3. 选择 `kkape` 仓库
4. 使用以下配置：

```
项目名称: tool-showcase
生产分支: main
框架预设: Astro
构建命令: npm run build
构建输出目录: dist
根目录: /
```

5. 点击 **Save and Deploy**

---

## ✅ 解决方案 4：手动部署（临时方案）

如果 Git 集成有问题，可以使用 Wrangler CLI 手动部署：

### 使用 Wrangler 部署

```bash
# 1. 确保在本地 main 分支
git checkout main
git pull origin main

# 2. 构建项目
npm install
npm run build

# 3. 登录 Cloudflare
npx wrangler login

# 4. 部署
npx wrangler pages deploy dist --project-name=tool-showcase
```

部署成功后，你会得到一个 URL，可以立即访问。

---

## 📋 检查清单

在重新部署之前，确认以下所有项目：

- [ ] Node 版本是 20
- [ ] 构建命令是 `npm run build`
- [ ] 构建输出目录是 `dist`
- [ ] 根目录是 `/` 或留空
- [ ] 生产分支是 `main`
- [ ] 仓库有最新的代码

---

## 🔍 验证部署是否成功

部署完成后，访问你的网站，应该看到：

✅ **正确的首页应该包含：**
- 🛠️ 工具展示标题
- "开发工具集合" 大标题
- 4 个工具卡片：InfloWave、Proto、Allbs Excel、Allbs Excel Test
- 中英文切换按钮
- 亮暗主题切换按钮

❌ **如果看到以下内容，说明部署错误：**
- "Hello World"
- 404 页面
- 空白页面
- 旧的内容

---

## 🆘 仍然有问题？

### 检查浏览器缓存

有时浏览器会缓存旧内容：

1. **硬刷新页面**
   - Windows/Linux: `Ctrl + F5` 或 `Ctrl + Shift + R`
   - macOS: `Cmd + Shift + R`

2. **清除缓存**
   - 打开浏览器开发者工具（F12）
   - 右键点击刷新按钮
   - 选择 "清空缓存并硬性重新加载"

### 使用隐身模式测试

在浏览器的隐身/无痕模式下打开网站，避免缓存影响。

---

## 📞 获取帮助

如果问题仍然存在：

1. 检查 Cloudflare Pages 构建日志的完整输出
2. 确认 GitHub 仓库的 main 分支包含所有文件
3. 验证 `.node-version` 文件存在且内容为 `20`
4. 查看 [Cloudflare Community](https://community.cloudflare.com/) 寻求帮助

---

## 🎯 预期结果

成功部署后，你应该能够：

- ✅ 访问网站首页看到所有 4 个工具
- ✅ 点击工具卡片查看详情页
- ✅ 切换中英文语言
- ✅ 切换亮暗主题
- ✅ 在移动设备上正常浏览
- ✅ 所有链接都能正常工作

如果以上功能都正常，恭喜！部署成功！🎉
