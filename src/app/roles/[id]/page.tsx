import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import rolesData from '../../../../data/roles.json';

// 角色数据类型定义
interface Role {
  id: string;
  name: string;
  symbol: string;
  creator: string;
  description: string;
  rolecoin_url: string;
  nft_url: string;
  image: string;
  marketcap: string;
  holders: number;
  price: string;
  change_24h: string;
}

// 生成静态路径
export async function generateStaticParams() {
  return rolesData.map((role) => ({
    id: role.id,
  }));
}

// 页面组件
export default function RoleDetail({ params }: { params: { id: string } }) {
  // 查找对应的角色数据
  const role = rolesData.find((r) => r.id === params.id) as Role | undefined;

  // 如果角色不存在，返回 404
  if (!role) {
    notFound();
  }

  // 判断价格变化是否为正数
  const isPositiveChange = role.change_24h.startsWith('+');

  // 模拟更多数据（在实际项目中这些数据会来自 API）
  const mockData = {
    volume24h: '2.3K USD',
    allTimeHigh: '0.0089 SOL',
    allTimeLow: '0.0012 SOL',
    createdDate: '2024-10-15',
    totalSupply: '1,000,000',
    circulatingSupply: '850,000'
  };

  return (
    <Layout>
      {/* 角色详情头部 */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：角色信息 */}
            <div>
              {/* 返回按钮 */}
              <Link 
                href="/"
                className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                返回首页
              </Link>

              <div className="flex items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mr-4">{role.name}</h1>
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-lg font-semibold">
                  ${role.symbol}
                </span>
              </div>

              <p className="text-xl text-purple-100 mb-6">
                {role.description}
              </p>

              <div className="flex items-center text-purple-200 mb-8">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                创作者：{role.creator}
              </div>

              {/* 操作按钮 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={role.rolecoin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 text-center"
                >
                  在 Pump.fun 购买
                </Link>
                <Link 
                  href={role.nft_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 text-center"
                >
                  查看 NFT 作品
                </Link>
              </div>
            </div>

            {/* 右侧：角色图片 */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md">
                <Image
                  src={role.image}
                  alt={role.name}
                  fill
                  className="object-cover"
                />
                {/* 价格变化标签 */}
                <div className={`absolute top-4 right-4 px-3 py-2 rounded-full text-sm font-semibold ${
                  isPositiveChange 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {role.change_24h}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 详细数据区域 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主要数据 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">代币数据</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">当前价格</p>
                  <p className="text-2xl font-bold text-gray-900">{role.price}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">市值</p>
                  <p className="text-2xl font-bold text-gray-900">{role.marketcap}</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">持币人数</p>
                  <p className="text-2xl font-bold text-gray-900">{role.holders}</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">24h 交易量</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.volume24h}</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">历史最高</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.allTimeHigh}</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">历史最低</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.allTimeLow}</p>
                </div>
              </div>

              {/* 代币信息 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">代币信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">代币符号:</span>
                    <span className="font-semibold">${role.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">创建日期:</span>
                    <span className="font-semibold">{mockData.createdDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">总供应量:</span>
                    <span className="font-semibold">{mockData.totalSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">流通供应量:</span>
                    <span className="font-semibold">{mockData.circulatingSupply}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 侧边栏 */}
            <div>
              {/* 创作者信息 */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">创作者信息</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-lg">
                      {role.creator.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{role.creator}</p>
                    <p className="text-sm text-gray-600">认证创作者</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  专注于动漫角色设计和数字艺术创作，在 CoinToon 生态系统中拥有多个热门角色代币。
                </p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200">
                  关注创作者
                </button>
              </div>

              {/* 快速链接 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">快速链接</h3>
                <div className="space-y-3">
                  <Link 
                    href={role.rolecoin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">Pump.fun 交易</span>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href={role.nft_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">OpenSea NFT</span>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 cursor-pointer">
                    <span className="font-medium text-gray-900">分享角色</span>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 相关角色推荐 */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            其他热门角色
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rolesData
              .filter(r => r.id !== role.id)
              .slice(0, 3)
              .map((otherRole) => (
                <Link 
                  key={otherRole.id}
                  href={`/roles/${otherRole.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-32 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-purple-400 to-blue-500">
                    <Image
                      src={otherRole.image}
                      alt={otherRole.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{otherRole.name}</h3>
                    <p className="text-sm text-purple-600 mb-2">${otherRole.symbol}</p>
                    <p className="text-sm text-gray-600">{otherRole.price}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}
