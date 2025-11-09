// 部署验证脚本
const fs = require('fs');
const path = require('path');

console.log('🔍 验证 CoinToon Demo 部署状态...\n');

// 检查必要文件
const requiredFiles = [
  'out/index.html',
  'out/creators/index.html', 
  'out/roles/miku/index.html',
  'out/roles/zero/index.html',
  'out/roles/naruto/index.html',
  'out/roles/sailor/index.html',
  'out/images/miku.svg',
  'out/images/zero.svg',
  'out/images/naruto.svg',
  'out/images/sailor.svg',
  'out/.nojekyll'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - 文件缺失`);
    allFilesExist = false;
  }
});

console.log('\n📊 验证结果:');
if (allFilesExist) {
  console.log('✅ 所有必要文件都已生成');
  console.log('🚀 项目已准备好部署到 GitHub Pages');
  console.log('🌐 预期链接: https://tianxiangdu.github.io/cointoon-demo/');
} else {
  console.log('❌ 部分文件缺失，需要重新构建');
  console.log('💡 请运行: npm run build');
}

// 检查 HTML 文件内容
if (fs.existsSync('out/index.html')) {
  const indexContent = fs.readFileSync('out/index.html', 'utf8');
  if (indexContent.includes('CoinToon') && indexContent.includes('热门')) {
    console.log('✅ 首页内容正确');
  } else {
    console.log('⚠️ 首页内容可能有问题');
  }
}

console.log('\n🎉 验证完成！');
console.log('📋 下一步: 在 GitHub 仓库设置中启用 Pages 功能');
console.log('🔗 设置链接: https://github.com/TianxiangDU/cointoon-demo/settings/pages');
