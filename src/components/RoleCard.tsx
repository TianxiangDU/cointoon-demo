import Image from 'next/image';
import Link from 'next/link';

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

interface RoleCardProps {
  role: Role;
}

export default function RoleCard({ role }: RoleCardProps) {
  // 判断价格变化是否为正数
  const isPositiveChange = role.change_24h.startsWith('+');

  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 overflow-hidden group max-w-md mx-auto">
      {/* 角色头像区域 */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="w-48 h-48 flex items-center justify-center">
          <Image
            src={role.image}
            alt={role.name}
            width={192}
            height={192}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* 价格变化标签 */}
        <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-md border-2 ${
          isPositiveChange 
            ? 'bg-emerald-500/95 text-white border-emerald-400/50' 
            : 'bg-red-500/95 text-white border-red-400/50'
        }`}>
          {role.change_24h}
        </div>
        
        {/* 装饰性渐变 */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* 卡片内容区域 */}
      <div className="p-8">
        {/* 角色名称和代币符号 */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight leading-tight">
            {role.name}
          </h3>
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="inline-flex items-center px-4 py-2 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
              ${role.symbol}
            </span>
          </div>
          <p className="text-gray-600 text-sm font-medium">创作者：{role.creator}</p>
        </div>

        {/* 角色描述 */}
        <p className="text-gray-700 text-center text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
          {role.description}
        </p>

        {/* 价格和市值信息 */}
        <div className="space-y-4 mb-6">
          {/* 主要数据行 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 text-center border border-blue-100">
              <p className="text-xs text-blue-600 mb-1 font-semibold uppercase tracking-wide">价格</p>
              <p className="font-black text-gray-900 text-xl">{role.price}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 text-center border border-emerald-100">
              <p className="text-xs text-emerald-600 mb-1 font-semibold uppercase tracking-wide">市值</p>
              <p className="font-black text-gray-900 text-xl">{role.marketcap}</p>
            </div>
          </div>
          
          {/* 次要数据 */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-center flex-1">
                <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">持币人</p>
                <p className="font-bold text-gray-900 text-lg">{role.holders}</p>
              </div>
              <div className="w-px h-8 bg-gray-300 mx-4"></div>
              <div className="text-center flex-1">
                <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">24H</p>
                <p className={`font-bold text-lg ${isPositiveChange ? 'text-emerald-600' : 'text-red-600'}`}>
                  {role.change_24h}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-3">
          {/* 主要操作按钮 */}
          <Link 
            href={role.rolecoin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl text-base font-bold text-center hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
          >
            <span className="text-lg">💎</span>
            购买 ${role.symbol} 代币
          </Link>
          
          {/* 次要操作按钮 */}
          <div className="grid grid-cols-2 gap-3">
            <Link 
              href={role.nft_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl text-sm font-semibold text-center hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1"
            >
              <span>🎨</span>
              查看作品
            </Link>
            
            <Link 
              href={`/roles/${role.id}`}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-4 rounded-xl text-sm font-semibold text-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1"
            >
              <span>📊</span>
              详细信息
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
