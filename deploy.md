# 🚀 CoinToon Demo 部署指南

## 📋 部署步骤

### 1. 创建 GitHub 仓库

请按照以下步骤在您的 GitHub 上创建新仓库：

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `cointoon-demo`
   - **Description**: `🎨 CoinToon - 动漫角色代币化生态系统 | Web3 动漫创作平台`
   - **Visibility**: Public (推荐) 或 Private
   - **不要**勾选 "Add a README file"（我们已经有了）
4. 点击 "Create repository"

### 2. 推送代码到 GitHub

复制以下命令并在终端中执行：

```bash
# 添加远程仓库（请替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/cointoon-demo.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

### 3. 部署到 Vercel

#### 方法一：通过 Vercel 网站部署（推荐）

1. 访问 [Vercel](https://vercel.com) 并使用 GitHub 账号登录
2. 点击 "New Project"
3. 选择您刚创建的 `cointoon-demo` 仓库
4. 点击 "Import"
5. 保持默认配置，点击 "Deploy"
6. 等待部署完成（约 2-3 分钟）
7. 获得外网访问链接：`https://cointoon-demo.vercel.app`

#### 方法二：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 部署到生产环境
vercel --prod
```

### 4. 自定义域名（可选）

如果您有自己的域名：

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加您的域名
3. 按照提示配置 DNS 记录
4. 等待 SSL 证书自动配置

## 🔧 环境配置

### 环境变量（如需要）

在 Vercel 项目设置中添加环境变量：

```bash
# 示例环境变量
NEXT_PUBLIC_API_URL=https://api.cointoon.com
NEXT_PUBLIC_PUMP_FUN_API=https://pump.fun/api
```

### 自动部署

配置完成后，每次推送到 `main` 分支都会自动触发部署：

```bash
# 修改代码后
git add .
git commit -m "✨ 添加新功能"
git push origin main
```

## 📊 部署后优化

### 1. 性能监控

- 在 Vercel 控制台查看性能指标
- 使用 Google PageSpeed Insights 测试
- 监控 Core Web Vitals

### 2. SEO 优化

- 添加 `sitemap.xml`
- 配置 `robots.txt`
- 优化 meta 标签

### 3. 分析工具

```bash
# 添加 Google Analytics
npm install @next/third-parties

# 添加 Vercel Analytics
npm install @vercel/analytics
```

## 🌐 访问链接

部署完成后，您的网站将可以通过以下链接访问：

- **Vercel 默认域名**: `https://cointoon-demo.vercel.app`
- **GitHub 仓库**: `https://github.com/YOUR_USERNAME/cointoon-demo`
- **自定义域名**: `https://your-domain.com` (如果配置了)

## 🔄 持续部署

### 分支策略

```bash
# 开发分支
git checkout -b develop
git push origin develop

# 功能分支
git checkout -b feature/new-feature
git push origin feature/new-feature
```

### 预览部署

Vercel 会为每个 Pull Request 创建预览部署，方便测试新功能。

## 📱 移动端优化

确保网站在移动设备上的表现：

1. 测试响应式设计
2. 优化触摸交互
3. 检查加载速度
4. 验证 PWA 功能

## 🚀 成功部署！

恭喜！您的 CoinToon Demo 网站现在已经可以在外网访问了！

### 下一步建议：

1. **分享链接** - 将网站链接分享给朋友和社区
2. **收集反馈** - 根据用户反馈持续改进
3. **添加功能** - 集成真实的区块链数据
4. **优化性能** - 监控和优化网站性能
5. **SEO 推广** - 提高网站在搜索引擎中的排名

---

🎉 **您的 CoinToon Demo 网站现在已经上线了！**

访问链接：`https://cointoon-demo.vercel.app`
