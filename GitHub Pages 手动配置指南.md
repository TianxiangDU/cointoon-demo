# 🌐 GitHub Pages 手动配置指南

## 🎯 当前状态

✅ 项目代码已在 GitHub：https://github.com/TianxiangDU/cointoon-demo  
✅ Next.js 配置已优化  
⏳ 需要手动配置 GitHub Pages  

## 🚀 GitHub Pages 配置步骤

### 第一步：访问仓库设置
1. 打开您的 GitHub 仓库：https://github.com/TianxiangDU/cointoon-demo
2. 点击仓库顶部的 **"Settings"** 选项卡
3. 在左侧菜单中滚动找到 **"Pages"** 并点击

### 第二步：配置部署源
在 Pages 设置页面：
1. **Source** 部分选择：**"GitHub Actions"**
2. 系统会显示 "Configure Next.js" 选项
3. 点击 **"Configure"** 按钮

### 第三步：使用推荐的 Next.js 配置
GitHub 会为您提供一个 Next.js 配置模板，请使用以下内容替换：

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: next
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 第四步：提交配置文件
1. 将上述配置粘贴到 GitHub 提供的编辑器中
2. 文件路径应该是：`.github/workflows/nextjs.yml`
3. 在底部填写提交信息：`Add Next.js GitHub Pages deployment`
4. 点击 **"Commit changes"**

### 第五步：等待自动部署
1. 提交后，GitHub Actions 会自动开始构建
2. 访问：https://github.com/TianxiangDU/cointoon-demo/actions 查看进度
3. 等待显示绿色 ✅ 表示部署成功

## 🎯 预期结果

### 🌐 外网访问链接
部署完成后，您的网站将可以通过以下链接访问：
**https://tianxiangdu.github.io/cointoon-demo/**

### 📊 网站功能
- **炫酷首页** - 深色主题 + 动态背景
- **热门排行** - 实时货币排行榜
- **创作者展示** - 明星创作者聚光灯
- **响应式设计** - 完美适配各种设备

## 🔧 如果配置过程中遇到问题

### 方案一：使用现有配置文件
如果 GitHub 检测到我们已有的配置文件：
1. 选择使用现有的 `.github/workflows/deploy.yml`
2. 点击 **"Enable GitHub Pages"**

### 方案二：手动创建配置
1. 在仓库中点击 **"Add file"** → **"Create new file"**
2. 文件路径输入：`.github/workflows/nextjs.yml`
3. 粘贴上述配置内容
4. 提交文件

### 方案三：简化配置
如果上述配置复杂，可以使用简化版本：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
        id: deployment
```

## 🎉 部署成功标志

当您看到以下内容时，说明部署成功：

### GitHub Actions 页面
```
✅ Deploy Next.js site to Pages
🌐 Your site is live at https://tianxiangdu.github.io/cointoon-demo/
📊 Build completed in ~3 minutes
🚀 All checks passed
```

### Pages 设置页面
```
✅ Your site is published at https://tianxiangdu.github.io/cointoon-demo/
🔄 Source: GitHub Actions
📅 Last deployed: just now
```

## 📱 部署后测试

访问您的网站并测试：
- [ ] 首页正常加载
- [ ] 所有角色图标显示
- [ ] 导航链接正常工作
- [ ] 热门排行榜显示
- [ ] 创作者区域展示
- [ ] 移动端响应式正常

## 🎊 恭喜！

完成配置后，您将拥有：
- **🌐 外网访问链接**: https://tianxiangdu.github.io/cointoon-demo/
- **🎨 炫酷动漫网站**: 深色主题 + 彩虹渐变
- **🔥 专业功能**: 排行榜 + 创作者展示
- **📱 完美体验**: 响应式设计
- **🔄 自动更新**: 推送代码即自动部署

---

🚀 **立即访问 GitHub 仓库设置页面，启用 Pages 功能！**

https://github.com/TianxiangDU/cointoon-demo/settings/pages
