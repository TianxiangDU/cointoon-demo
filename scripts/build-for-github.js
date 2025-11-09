const fs = require('fs');
const path = require('path');

// 创建 .nojekyll 文件，告诉 GitHub Pages 不要使用 Jekyll
const nojekyllPath = path.join(process.cwd(), 'out', '.nojekyll');

// 确保 out 目录存在
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 创建 .nojekyll 文件
fs.writeFileSync(nojekyllPath, '');

console.log('✅ Created .nojekyll file for GitHub Pages');
console.log('🚀 Build completed for GitHub Pages deployment');
