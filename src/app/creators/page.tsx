'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import rolesData from '../../../data/roles.json';

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

// 创作者数据类型定义
interface Creator {
  name: string;
  roles: Role[];
  totalMarketcap: number;
  totalHolders: number;
}

// 创作者数据处理
function getCreatorsData(): Creator[] {
  const creatorsMap = new Map<string, Creator>();
  
  rolesData.forEach((role: Role) => {
    if (!creatorsMap.has(role.creator)) {
      creatorsMap.set(role.creator, {
        name: role.creator,
        roles: [],
        totalMarketcap: 0,
        totalHolders: 0
      });
    }
    
    const creator = creatorsMap.get(role.creator);
    if (creator) {
      creator.roles.push(role);
      creator.totalMarketcap += parseFloat(role.marketcap.replace(/[^0-9.]/g, ''));
      creator.totalHolders += role.holders;
    }
  });
  
  return Array.from(creatorsMap.values()).sort((a, b) => b.totalMarketcap - a.totalMarketcap);
}

export default function Creators() {
  const creators = getCreatorsData();

  return (
    <Layout>
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              创作者社区
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              认识 CoinToon 生态系统中的优秀创作者，他们为动漫角色赋予了独特的数字价值
            </p>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <p className="text-2xl font-bold">{creators.length}</p>
                <p className="text-sm text-purple-200">活跃创作者</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <p className="text-2xl font-bold">{rolesData.length}</p>
                <p className="text-sm text-purple-200">角色代币</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <p className="text-2xl font-bold">
                  {creators.reduce((sum, creator) => sum + creator.totalHolders, 0).toLocaleString()}
                </p>
                <p className="text-sm text-purple-200">社区成员</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 创作者列表 */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              顶级创作者
            </h2>
            <p className="text-lg text-gray-600">
              按市值排名的优秀创作者
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creators.map((creator, index) => (
              <div 
                key={creator.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* 创作者头部 */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center mb-4">
                    {/* 排名徽章 */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                      index === 2 ? 'bg-gradient-to-r from-orange-400 to-red-500' :
                      'bg-gradient-to-r from-purple-400 to-blue-500'
                    }`}>
                      #{index + 1}
                    </div>
                    
                    {/* 创作者头像 */}
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-lg">
                        {creator.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{creator.name}</h3>
                      <p className="text-sm text-gray-500">认证创作者</p>
                    </div>
                  </div>

                  {/* 创作者统计 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-lg font-bold text-gray-900">
                        {creator.totalMarketcap.toFixed(1)}K
                      </p>
                      <p className="text-xs text-gray-600">总市值 (USD)</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-lg font-bold text-gray-900">
                        {creator.totalHolders.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-600">粉丝数量</p>
                    </div>
                  </div>
                </div>

                {/* 创作的角色 */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    创作的角色 ({creator.roles.length})
                  </h4>
                  <div className="space-y-2">
                    {creator.roles.slice(0, 3).map((role: Role) => (
                      <Link
                        key={role.id}
                        href={`/roles/${role.id}`}
                        className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-semibold">
                              {role.symbol.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{role.name}</p>
                            <p className="text-xs text-gray-500">${role.symbol}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-900">{role.price}</p>
                          <p className={`text-xs ${
                            role.change_24h.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {role.change_24h}
                          </p>
                        </div>
                      </Link>
                    ))}
                    
                    {creator.roles.length > 3 && (
                      <p className="text-xs text-gray-500 text-center pt-2">
                        还有 {creator.roles.length - 3} 个角色...
                      </p>
                    )}
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="p-6 pt-0">
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200">
                      关注创作者
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-200">
                      查看作品
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 成为创作者区域 */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            成为 CoinToon 创作者
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            加入我们的创作者社区，为你的动漫角色创建专属代币，与粉丝建立更深层的连接
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">创建角色</h3>
              <p className="text-gray-600">设计独特的动漫角色，赋予其独特的故事和个性</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">发行代币</h3>
              <p className="text-gray-600">在 Pump.fun 上为角色发行专属代币，建立经济价值</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">建立社区</h3>
              <p className="text-gray-600">与粉丝互动，建立忠实的社区，共同推动角色价值增长</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200">
              申请成为创作者
            </button>
            <Link 
              href="/"
              className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 text-center"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
