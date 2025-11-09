import Layout from '@/components/Layout';
import RoleCard from '@/components/RoleCard';
import Link from 'next/link';
import rolesData from '../../data/roles.json';
import ctnData from '../../data/ctn-info.json';

// 炫酷的 Hero 区域 - 以作品为核心
function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* 动态背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          {/* 主标题 */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-none tracking-tight">
            CoinToon
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-white/90 mb-4">
            动漫创作的 Web3 革命
          </p>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            发现独特的动漫作品，支持才华横溢的创作者，投资你喜爱的角色代币
          </p>
        </div>

        {/* 热门作品展示网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {rolesData.map((role, index) => (
            <div 
              key={role.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl mb-4 overflow-hidden">
                <img 
                  src={role.image} 
                  alt={role.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{role.name}</h3>
              <p className="text-purple-200 text-sm mb-2">${role.symbol}</p>
              <div className="flex justify-between items-center">
                <span className="text-emerald-400 font-semibold text-sm">{role.price}</span>
                <span className={`text-sm font-bold ${role.change_24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {role.change_24h}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 实时数据流 */}
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white mb-2">{rolesData.length}</div>
              <div className="text-purple-200 font-medium">精选作品</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">{ctnData.holders.toLocaleString()}</div>
              <div className="text-purple-200 font-medium">活跃收藏家</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">{ctnData.marketcap}</div>
              <div className="text-purple-200 font-medium">总交易额</div>
            </div>
          </div>
        </div>

        {/* 行动召唤按钮 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <Link 
            href="#trending"
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-5 rounded-3xl font-black hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🔥</span>
            <span>查看热门作品</span>
          </Link>
          <Link 
            href="#creators"
            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-5 rounded-3xl font-black hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🎨</span>
            <span>发现创作者</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// 热门货币排行榜
function TrendingSection() {
  // 按市值排序角色
  const sortedRoles = [...rolesData].sort((a, b) => {
    const aValue = parseFloat(a.marketcap.replace(/[^0-9.]/g, ''));
    const bValue = parseFloat(b.marketcap.replace(/[^0-9.]/g, ''));
    return bValue - aValue;
  });

  return (
    <section id="trending" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            🔥 热门货币排行榜
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            实时追踪最受欢迎的动漫角色代币，发现下一个爆款投资机会
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 排行榜列表 */}
          <div className="space-y-4">
            {sortedRoles.map((role, index) => (
              <div 
                key={role.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  {/* 排名 */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                    index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' :
                    index === 2 ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white' :
                    'bg-gradient-to-r from-purple-400 to-blue-500 text-white'
                  }`}>
                    {index + 1}
                  </div>

                  {/* 角色信息 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden">
                        <img 
                          src={role.image} 
                          alt={role.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-black text-lg text-gray-900">{role.name}</h3>
                        <p className="text-purple-600 font-semibold">${role.symbol}</p>
                      </div>
                    </div>
                  </div>

                  {/* 价格数据 */}
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-900 mb-1">{role.price}</p>
                    <p className={`text-sm font-bold ${role.change_24h.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                      {role.change_24h}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">市值: {role.marketcap}</p>
                  </div>

                  {/* 交易按钮 */}
                  <Link 
                    href={role.rolecoin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    交易
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 市场概览 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">📊 市场概览</h3>
            
            <div className="space-y-6">
              {/* 总市值 */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-semibold mb-1">总市值</p>
                    <p className="text-3xl font-black text-gray-900">
                      {sortedRoles.reduce((sum, role) => sum + parseFloat(role.marketcap.replace(/[^0-9.]/g, '')), 0).toFixed(1)}K USD
                    </p>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </div>

              {/* 24小时交易量 */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-600 font-semibold mb-1">24H 交易量</p>
                    <p className="text-3xl font-black text-gray-900">2.8K USD</p>
                  </div>
                  <div className="text-4xl">📈</div>
                </div>
              </div>

              {/* 活跃用户 */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-600 font-semibold mb-1">活跃用户</p>
                    <p className="text-3xl font-black text-gray-900">
                      {sortedRoles.reduce((sum, role) => sum + role.holders, 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-4xl">👥</div>
                </div>
              </div>
            </div>

            {/* 查看更多按钮 */}
            <div className="mt-8 text-center">
              <Link 
                href="/market"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105"
              >
                <span>查看完整市场</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 创作者展示区域
function CreatorsSection() {
  return (
    <section id="creators" className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            🎨 明星创作者
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            认识才华横溢的动漫创作者，他们正在重新定义数字艺术的价值
          </p>
        </div>

        {/* 创作者网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Array.from(new Set(rolesData.map(role => role.creator))).map((creatorName) => {
            const creatorRoles = rolesData.filter(role => role.creator === creatorName);
            const totalMarketcap = creatorRoles.reduce((sum, role) => 
              sum + parseFloat(role.marketcap.replace(/[^0-9.]/g, '')), 0
            );

            return (
              <div 
                key={creatorName}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">
                      {creatorName.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{creatorName}</h3>
                  <p className="text-purple-200 font-medium">认证创作者</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {creatorRoles.slice(0, 4).map((role) => (
                    <div key={role.id} className="aspect-square bg-white/20 rounded-2xl overflow-hidden">
                      <img 
                        src={role.image} 
                        alt={role.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">{creatorRoles.length}</p>
                    <p className="text-purple-200 text-sm">作品数量</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">{totalMarketcap.toFixed(1)}K</p>
                    <p className="text-purple-200 text-sm">总市值</p>
                  </div>
                </div>

                <Link 
                  href="/creators"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  查看作品集
                </Link>
              </div>
            );
          })}
        </div>

        {/* 成为创作者 CTA */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 text-center">
          <h3 className="text-4xl font-black text-white mb-4">成为下一个明星创作者</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            加入 CoinToon 创作者社区，将你的动漫角色转化为有价值的数字资产
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Link 
              href="/creators"
              className="flex-1 bg-white text-purple-700 px-6 py-4 rounded-2xl font-black hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 text-center"
            >
              申请成为创作者
            </Link>
            <Link 
              href="#guide"
              className="flex-1 border-2 border-white text-white px-6 py-4 rounded-2xl font-black hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// 主页面组件
export default function Home() {
  return (
    <Layout>
      {/* 炫酷 Hero 区域 */}
      <HeroSection />

      {/* 热门货币排行榜 */}
      <TrendingSection />

      {/* 创作者聚光灯区域 */}
      <CreatorsSection />
    </Layout>
  );
}