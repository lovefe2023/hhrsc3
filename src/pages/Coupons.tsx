import { useNavigate } from 'react-router-dom';

export default function Coupons() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: '飞天茅台 53度 500ml 酱香型白酒 优质纯粮酿造',
      subtitle: '酱香突出 幽雅细腻 空杯留香持久',
      price: '2949',
      tag: '官方正品保障',
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      title: '五粮液 普五第八代 52度 浓香型白酒 经典传承',
      subtitle: '香气悠久 味醇厚 入口甘美 入喉净爽',
      price: '949',
      tag: '平台十佳单品',
      img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      title: '奔富 MAX 麦克斯 干红葡萄酒 澳洲原瓶进口',
      subtitle: '果香浓郁 口感圆润 适合商务宴请',
      price: '168',
      tag: '原瓶进口认证',
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
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">新人优享</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-safe">
        {/* Hero Banner */}
        <div className="px-4 pt-4 pb-2">
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-6 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">官方补贴</span>
                <span className="text-slate-300 text-xs tracking-wider">高端酒水专场</span>
              </div>
              <h1 className="text-3xl font-black text-white mb-1 tracking-tight">
                新人专享特惠
              </h1>
              <p className="text-slate-400 text-xs">
                注册即享千元大礼包，正品好酒带回家
              </p>
            </div>
            <span className="absolute bottom-4 right-4 material-symbols-outlined text-6xl text-white/10 rotate-12">
              liquor
            </span>
          </div>
        </div>

        {/* Coupon Box */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 mx-4 mt-2 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex gap-3">
            {/* Left tall coupon */}
            <div className="w-1/3 bg-primary/5 dark:bg-primary/10 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-primary/20">
              <div className="text-primary font-bold text-3xl"><span className="text-sm">¥</span>50</div>
              <div className="text-[11px] text-slate-700 dark:text-slate-300 mt-1 font-medium">无门槛红包</div>
              <div className="text-[9px] text-primary mt-2 bg-primary/10 px-2 py-0.5 rounded-full">
                全场通用
              </div>
            </div>
            {/* Right grid of 4 coupons */}
            <div className="w-2/3 grid grid-cols-2 gap-2">
              {[
                { price: 200, desc: '满2000减', tag: '酱香白酒' },
                { price: 100, desc: '满1000减', tag: '浓香白酒' },
                { price: 50, desc: '满500减', tag: '进口红酒' },
                { price: 20, desc: '满200减', tag: '养生酒具' },
              ].map((c, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-2 flex items-center gap-1.5 border border-slate-100 dark:border-slate-800">
                  <div className="text-primary font-bold text-lg shrink-0"><span className="text-[10px]">¥</span>{c.price}</div>
                  <div className="flex flex-col min-w-0">
                    <div className="text-[10px] text-slate-700 dark:text-slate-300 truncate font-medium">{c.desc}</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate mt-0.5">{c.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full mt-4 bg-primary text-white font-bold py-3 rounded-full shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
            一键领取全部
          </button>
        </div>

        {/* Product List */}
        <div className="px-4 py-4 space-y-3">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <span className="w-4 h-[2px] bg-primary/50 rounded-full"></span>
              新人专享好物
              <span className="w-4 h-[2px] bg-primary/50 rounded-full"></span>
            </h3>
          </div>
          
          {products.map(p => (
            <div key={p.id} className="bg-white dark:bg-slate-900 rounded-2xl p-3 flex gap-3 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-[110px] h-[110px] shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white text-[9px] py-0.5 px-1 text-center font-medium truncate backdrop-blur-sm">
                  {p.tag}
                </div>
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <h3 className="text-[13px] font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 mb-1">
                  {p.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-auto">
                  {p.subtitle}
                </p>
                <div className="flex items-end justify-between mt-2">
                  <div>
                    <div className="bg-primary/10 text-primary border border-primary/20 text-[9px] px-1.5 py-0.5 rounded-sm inline-block mb-1">
                      新人首单价
                    </div>
                    <div className="flex items-baseline text-primary font-bold">
                      <span className="text-sm">¥</span>
                      <span className="text-xl tracking-tight">{p.price}</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm shadow-primary/20 active:scale-95 transition-transform">
                    领券购
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
