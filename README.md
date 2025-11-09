# 🎨 CoinToon - 动漫角色代币化生态系统

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/cointoon-demo)

## 🚀 项目简介

CoinToon 是一个创新的 Web3 平台，专注于动漫角色的代币化和数字艺术生态系统。我们连接创作者与粉丝，让每个动漫角色都拥有独特的数字价值和社区。

### ✨ 核心功能

- 🔥 **热门货币排行榜** - 实时追踪最受欢迎的动漫角色代币
- 🎨 **明星创作者** - 展示才华横溢的动漫创作者和他们的作品
- 💎 **精选作品** - 高质量的动漫角色 NFT 作品展示
- 📊 **市场数据** - 专业的价格、市值和交易数据

### 🎯 设计特色

- **现代化 UI** - 深色主题 + 彩虹渐变设计
- **炫酷动画** - 流畅的过渡效果和交互反馈
- **响应式设计** - 完美适配桌面端和移动端
- **高性能** - 基于 Next.js 14 的优化构建

## 🛠 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式系统**: Tailwind CSS
- **开发语言**: TypeScript
- **部署平台**: Vercel
- **图标系统**: SVG + Emoji

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/YOUR_USERNAME/cointoon-demo.git
cd cointoon-demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问
open http://localhost:3000
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
cointoon-demo/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx           # 首页
│   │   ├── creators/          # 创作者页面
│   │   ├── roles/[id]/        # 角色详情页
│   │   └── globals.css        # 全局样式
│   └── components/            # React 组件
│       ├── Layout.tsx         # 页面布局
│       └── RoleCard.tsx       # 角色卡片
├── data/                      # 数据文件
│   ├── roles.json            # 角色数据
│   └── ctn-info.json         # CTN 主币信息
├── public/                    # 静态资源
│   └── images/               # 图片文件
└── README.md
```

## 🎨 设计系统

### 配色方案
- **主色调**: 深紫色 → 粉色 → 蓝色渐变
- **背景色**: 深色系主题
- **强调色**: 彩虹渐变效果
- **文字色**: 高对比度白色/灰色

### 组件库
- **HeroSection** - 炫酷的首页展示区域
- **TrendingSection** - 热门货币排行榜
- **CreatorsSection** - 创作者聚光灯
- **RoleCard** - 角色代币卡片组件

## 📊 数据配置

### 角色数据格式 (roles.json)
```json
{
  "id": "miku",
  "name": "初音未来",
  "symbol": "MIKU",
  "creator": "LunaDraws",
  "description": "最具人气的虚拟歌姬角色...",
  "rolecoin_url": "https://pump.fun/MIKU",
  "nft_url": "https://opensea.io/assets/...",
  "image": "/images/miku.svg",
  "marketcap": "12.3K USD",
  "holders": 243,
  "price": "0.0045 SOL",
  "change_24h": "+12.5%"
}
```

## 🚀 部署指南

### Vercel 部署 (推荐)

1. Fork 这个仓库到你的 GitHub
2. 在 [Vercel](https://vercel.com) 上导入项目
3. 自动部署完成！

### 其他平台
- **Netlify**: 支持 Next.js 静态导出
- **Railway**: 支持 Node.js 应用
- **自托管**: 使用 Docker 容器化部署

## 🔧 自定义配置

### 添加新角色
1. 在 `data/roles.json` 中添加角色数据
2. 将角色图片放入 `public/images/` 目录
3. 重新构建项目

### 修改主题色彩
编辑 `tailwind.config.js` 和 `src/app/globals.css` 文件

### 集成真实数据
替换 JSON 文件为 API 调用，连接真实的区块链数据

## 🌟 功能特色

### 用户体验
- **沉浸式设计** - 全屏视觉冲击
- **直观导航** - emoji + 文字导航
- **快速操作** - 一键交易和浏览
- **实时数据** - 动态更新的市场信息

### 技术亮点
- **性能优化** - 图片懒加载和代码分割
- **SEO 友好** - 静态生成和元数据优化
- **类型安全** - 完整的 TypeScript 支持
- **现代化** - 最新的 Web 技术栈

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- **项目主页**: [https://cointoon-demo.vercel.app](https://cointoon-demo.vercel.app)
- **GitHub**: [https://github.com/YOUR_USERNAME/cointoon-demo](https://github.com/YOUR_USERNAME/cointoon-demo)
- **问题反馈**: [GitHub Issues](https://github.com/YOUR_USERNAME/cointoon-demo/issues)

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！