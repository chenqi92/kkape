# ⚡ 快速部署指南

## 🎯 最简单的部署方式（推荐）

### 第 1 步：连接到 Cloudflare Pages

1. 访问 https://dash.cloudflare.com/
2. 点击左侧菜单的 **Pages**
3. 点击 **创建项目**
4. 选择 **连接到 Git**

### 第 2 步：选择仓库

1. 授权 Cloudflare 访问你的 GitHub 账户
2. 在仓库列表中选择 **kkape**
3. 点击 **开始设置**

### 第 3 步：配置项目

复制粘贴以下配置：

```
项目名称: tool-showcase
生产分支: main
框架预设: Astro
构建命令: npm run build
构建输出目录: dist
根目录: /（或留空）

⚠️ 重要：不要填写"部署命令"，保持留空
```

**关键提醒**：
- ❌ 不要在"部署命令 (Deploy command)"字段填写任何内容
- ✅ 该字段应该**完全留空**
- Cloudflare Pages 会自动部署 dist 目录

### 第 4 步：部署

点击 **保存并部署**，然后等待 1-2 分钟。

完成！ 🎉

---

## 🔗 访问你的网站

部署成功后，你会得到一个类似这样的 URL：

```
https://tool-showcase-xxx.pages.dev
```

## 🌐 使用自定义域名（可选）

1. 在 Cloudflare Pages 项目中，点击 **自定义域**
2. 点击 **设置自定义域**
3. 输入你的域名，例如：`tools.yourdomain.com`
4. 按照提示配置 DNS

## 🚀 后续更新

以后只需：

```bash
git add .
git commit -m "更新内容"
git push
```

Cloudflare Pages 会自动构建和部署！

## 📞 遇到问题？

查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取详细的故障排除指南。

---

**就是这么简单！** 从推送代码到网站上线，只需要几分钟。
