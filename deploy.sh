#!/bin/bash

# 🚀 CoinToon Demo 一键部署脚本

echo "🎨 CoinToon Demo 部署开始..."

# 检查是否安装了必要的工具
if ! command -v git &> /dev/null; then
    echo "❌ Git 未安装，请先安装 Git"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 Node.js"
    exit 1
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，请检查代码"
    exit 1
fi

echo "✅ 构建成功！"

# 检查是否已经添加了远程仓库
if git remote get-url origin &> /dev/null; then
    echo "📡 远程仓库已配置"
else
    echo "⚠️  请先配置 GitHub 远程仓库："
    echo "   git remote add origin https://github.com/YOUR_USERNAME/cointoon-demo.git"
    echo "   然后重新运行此脚本"
    exit 1
fi

# 推送到 GitHub
echo "📤 推送代码到 GitHub..."
git push -u origin main

if [ $? -ne 0 ]; then
    echo "❌ 推送失败，请检查 GitHub 仓库配置"
    exit 1
fi

echo "✅ 代码已推送到 GitHub！"

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安装 Vercel CLI..."
    npm install -g vercel
fi

# 部署到 Vercel
echo "🚀 部署到 Vercel..."
vercel --prod

echo "🎉 部署完成！"
echo ""
echo "🌐 您的网站现在可以通过以下链接访问："
echo "   - Vercel: https://cointoon-demo.vercel.app"
echo "   - GitHub: https://github.com/YOUR_USERNAME/cointoon-demo"
echo ""
echo "📱 请在不同设备上测试网站效果"
echo "⭐ 如果满意，请给 GitHub 仓库一个 Star！"
