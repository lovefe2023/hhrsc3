import { useNavigate } from 'react-router-dom';

export default function GroupBuy() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: '飞天茅台 53度 500ml 酱香型白酒',
      subtitle: '酱香突出 幽雅细腻',
      singlePrice: 3299,
      groupPrice: 2999,
      save: 300,
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      title: '五粮液 普五第八代 52度 浓香型白酒',
      subtitle: '香气悠久 味醇厚',
      singlePrice: 1499,
      groupPrice: 1099,
      save: 400,
      img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      title: '国窖1573 52度 浓香型白酒 500ml',
      subtitle: '源自百年老窖池',
      singlePrice: 1299,
      groupPrice: 999,
      save: 300,
      img: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 4,
      title: '奔富 MAX 麦克斯 干红葡萄酒',
      subtitle: '澳洲原瓶进口',
      singlePrice: 299,
      groupPrice: 168,
      save: 131,
      img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">组团免单</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-safe">
        {/* Rules Banner */}
        <div className="px-4 pt-4 pb-2">
          <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl p-5 text-white shadow-lg shadow-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h2 className="text-xl font-black mb-1 flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined">groups</span>
              3人拼团 订单免单
            </h2>
            <p className="text-red-100 text-xs mb-5 relative z-10">邀请好友参与，最高全额返现</p>
            
            <div className="flex justify-between items-start relative z-10">
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg mb-2 border border-white/30">1</div>
                <span className="text-[11px] text-center leading-tight">1人参与<br/>返20%</span>
              </div>
              <div className="w-8 h-[1px] bg-white/30 mt-5"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg mb-2 border border-white/30">2</div>
                <span className="text-[11px] text-center leading-tight">推荐第2人<br/>返20%</span>
              </div>
              <div className="w-8 h-[1px] bg-white/30 mt-5"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center font-bold text-lg mb-2 shadow-md">3</div>
                <span className="text-[11px] text-center font-bold text-yellow-200 leading-tight">推荐第3人<br/>返60% (免单)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="px-4 py-3 space-y-3">
          {products.map(p => (
            <div key={p.id} className="bg-white dark:bg-slate-900 rounded-2xl p-3 flex gap-3 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-[120px] h-[120px] shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg">
                  3人团
                </div>
              </div>
              
              <div className="flex-1 flex flex-col min-w-0 py-0.5">
                <h3 className="text-[14px] font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 mb-1">
                  {p.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                  {p.subtitle}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      立省 ¥{p.save}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through">
                      单买价 ¥{p.singlePrice}
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div className="flex items-baseline text-red-600 font-bold">
                      <span className="text-xs mr-0.5">团购价 ¥</span>
                      <span className="text-xl tracking-tight leading-none">{p.groupPrice}</span>
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md shadow-red-500/20 active:scale-95 transition-transform">
                      立即开团
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
