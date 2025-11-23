# 🔄 重新创建 Cloudflare Pages 项目

## 为什么需要重新创建？

如果你在 Cloudflare Pages 设置中找不到"部署命令"字段，或者删除后仍然失败，最简单的方法是删除旧项目并重新创建一个干净的项目。

---

## 📋 重新创建步骤（10分钟）

### 步骤 1：删除旧项目

1. 登录 https://dash.cloudflare.com/
2. 进入 **Workers & Pages**
3. 找到你的项目（可能叫 `tool-showcase`）
4. 点击项目进入详情页
5. 点击 **Settings** 选项卡
6. 滚动到页面最底部
7. 找到 **Danger Zone** 或 **Delete project** 部分
8. 点击 **Delete project** 按钮
9. 输入项目名称确认删除
10. 点击确认

**注意**：删除项目不会删除 GitHub 仓库中的代码，完全安全。

---

### 步骤 2：创建新项目

1. 在 **Workers & Pages** 页面，点击 **Create application**
2. 选择 **Pages** 选项卡
3. 点击 **Connect to Git**

---

### 步骤 3：连接 GitHub 仓库

1. 选择 **GitHub** 作为 Git 提供商
2. 如果需要，授权 Cloudflare 访问你的 GitHub
3. 在仓库列表中找到并选择 **kkape**
4. 点击 **Begin setup**

---

### 步骤 4：配置构建设置（非常重要！）

在配置页面，**精确**按照以下填写：

#### Project name（项目名称）
```
tool-showcase
```

#### Production branch（生产分支）
```
main
```

#### Framework preset（框架预设）
- 在下拉菜单中选择 **Astro**
- 这会自动填充一些字段

#### Build command（构建命令）
```
npm run build
```

#### Build output directory（构建输出目录）
```
dist
```

#### Root Directory（根目录）
```
/
```
（或留空）

#### ⚠️ 最重要：Deploy command（部署命令）
**不要填写任何内容！**
- 如果这个字段存在，**保持完全空白**
- 不要输入 `npx wrangler deploy`
- 不要输入任何其他命令
- **完全留空**

#### Environment variables（环境变量）
不需要添加任何环境变量（Node 版本会自动从 `.node-version` 文件读取）

---

### 步骤 5：完成创建

1. 仔细检查所有配置（特别是确认部署命令为空）
2. 点击 **Save and Deploy** 按钮
3. 等待首次部署（通常 1-2 分钟）

---

### 步骤 6：验证部署

部署完成后：

1. 点击部署提供的 URL（类似 `https://tool-showcase-xxx.pages.dev`）
2. 确认看到完整的网站内容，包括：
   - 🛠️ "工具展示" 标题
   - 4 个工具卡片（InfloWave、Proto、Allbs Excel、Allbs Excel Test）
   - 中英文切换功能
   - 亮暗主题切换

如果看到以上内容，说明部署成功！🎉

---

## ✅ 检查清单

在创建新项目前，确认：

- [ ] 已删除旧项目
- [ ] GitHub 仓库 `kkape` 可访问
- [ ] main 分支包含最新代码
- [ ] 准备好以下配置信息：
  - 框架：Astro
  - 构建命令：npm run build
  - 输出目录：dist
  - 部署命令：**留空**

---

## 🎯 关键配置对比

### ❌ 错误的配置（导致失败）
```
Framework: Astro
Build command: npm run build
Build output: dist
Deploy command: npx wrangler deploy  ← 这是问题所在！
```

### ✅ 正确的配置（应该使用）
```
Framework: Astro
Build command: npm run build
Build output: dist
Deploy command: [空白]  ← 不填写任何内容
```

---

## 💡 为什么不需要部署命令？

对于 **Astro 静态站点**：
1. `npm run build` 生成静态文件到 `dist` 目录
2. Cloudflare Pages **自动**将 `dist` 目录部署到 CDN
3. **不需要**任何额外的部署步骤或命令

**wrangler deploy** 是用于：
- Cloudflare Workers（服务器端代码）
- **不适用于**静态站点

---

## 🆘 如果新项目仍然失败

1. **检查构建日志**
   - 进入 Deployments 页面
   - 点击失败的部署
   - 查看完整的构建日志
   - 确认看到 `10 page(s) built` 和 `Complete!`
   - 确认**没有**看到 `Executing user deploy command`

2. **验证 GitHub 仓库**
   - 访问 https://github.com/chenqi92/kkape
   - 确认 main 分支有最新的代码
   - 确认包含所有必要的文件（src/、public/、package.json 等）

3. **检查本地构建**
   ```bash
   git checkout main
   npm install
   npm run build
   ls dist/  # 应该看到 index.html 和其他文件
   ```

---

## 📞 需要帮助？

如果重新创建后仍有问题，请提供：
1. 新项目的构建日志（完整内容）
2. Cloudflare Pages 配置截图
3. 部署失败的错误信息

---

重新创建项目是最干净、最可靠的解决方案。这个过程只需要 5-10 分钟，而且可以确保没有任何历史配置问题。
