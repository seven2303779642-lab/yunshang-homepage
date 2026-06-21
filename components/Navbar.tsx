export default function Navbar() {
    return (
      <nav className="w-full bg-[#c83f3b]">
        <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-20">
          <div className="flex items-center gap-4 text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">
              🍜
            </div>
  
            <div className="leading-none">
              <div className="text-4xl font-extrabold tracking-wide">
                云尚米线
              </div>
              <div className="mt-2 text-sm font-bold tracking-wide">
                YUNSHANG RICE NOODLE
              </div>
            </div>
          </div>
  
          <div className="flex items-center gap-9 text-white">
            <a className="bg-white px-3 py-1 font-bold text-[#c83f3b]">首页</a>
            <a className="font-bold">关于</a>
            <a className="font-bold">菜单</a>
            <a className="font-bold">门店</a>
            <a className="font-bold">活动</a>
            <a className="font-bold">English</a>
  
            <button className="ml-8 border-2 border-white px-10 py-3 text-lg font-bold">
              线上点单
            </button>
          </div>
        </div>
      </nav>
    );
  }