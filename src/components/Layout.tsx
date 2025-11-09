import Link from 'next/link';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* 现代化导航栏 */}
      <nav className="bg-black/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo 区域 */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">CT</span>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  CoinToon
                </h1>
                <p className="text-xs text-gray-400 font-medium">Web3 动漫生态</p>
              </div>
            </Link>

            {/* 导航链接 */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="#trending" 
                className="text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                🔥 热门
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#creators" 
                className="text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                🎨 创作者
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/creators" 
                className="text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                💎 市场
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="https://pump.fun/CTN" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-black hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 购买 CTN
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* CoinToon 信息 */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CoinToon</h3>
                  <p className="text-gray-400 text-sm">动漫角色代币化生态系统</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                连接创作者与粉丝的Web3平台，让每个动漫角色都拥有自己的数字价值。
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/cointoon" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://discord.gg/cointoon" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="text-gray-400 hover:text-white transition-colors duration-200">
                    创作者
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://pump.fun/CTN" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    购买 CTN
                  </a>
                </li>
              </ul>
            </div>

            {/* 生态系统 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">生态系统</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://pump.fun" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Pump.fun
                  </a>
                </li>
                <li>
                  <a 
                    href="https://manifold.xyz" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Manifold
                  </a>
                </li>
                <li>
                  <a 
                    href="https://opensea.io" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    OpenSea
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 CoinToon. 保留所有权利. | 
              <span className="ml-2">构建在 Solana 区块链上</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
