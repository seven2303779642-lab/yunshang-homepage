export default function Footer() {
    return (
      <footer className="relative mt-24 overflow-hidden bg-[#fff4ec] text-white">
        {/* Top decorative area */}
        <div className="relative z-10 -mt-16 h-32 bg-[#fff4ec]">
          <div className="absolute bottom-0 left-0 h-20 w-full overflow-hidden">
            <div className="flex h-full items-end opacity-90">
              {Array.from({ length: 28 }).map((_, index) => (
                <div
                  key={index}
                  className="h-20 w-24 shrink-0 rounded-t-full border-[3px] border-[#c83f3b] border-b-0"
                />
              ))}
            </div>
          </div>
  
          <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-6">
            {["下山小时", "新鲜熬煮", "不添加味精", "米线无限量"].map(
              (item) => (
                <div
                  key={item}
                  className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#c83f3b] bg-[#c83f3b] text-center text-xs font-bold leading-tight text-white"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
  
        {/* Main red footer */}
        <div className="relative bg-[#c83f3b] px-20 py-20">
          {/* bottom wave decoration inside red block */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full overflow-hidden opacity-35">
            <div className="flex h-full items-end">
              {Array.from({ length: 32 }).map((_, index) => (
                <div
                  key={index}
                  className="h-24 w-28 shrink-0 rounded-t-full border-2 border-white border-b-0"
                />
              ))}
            </div>
          </div>
  
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-4 items-start gap-16">
            {/* Logo block */}
            <div>
              <div className="mb-6">
                <div className="text-4xl font-extrabold leading-tight">
                  云尚
                  <br />
                  米线
                </div>
                <div className="mt-2 text-xs font-bold">
                  YUNSHANG RICE NOODLE
                </div>
              </div>
  
              <div className="flex gap-8 text-2xl">
                <span>ⓕ</span>
                <span>◎</span>
                <span className="rounded bg-white px-1 text-sm font-bold text-[#c83f3b]">
                  小红书
                </span>
              </div>
            </div>
  
            {/* Link column 1 */}
            <div className="flex flex-col items-center gap-7 text-xl font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                云
              </div>
              <a>关于云尚</a>
              <a>活动</a>
            </div>
  
            {/* Link column 2 */}
            <div className="flex flex-col items-center gap-7 text-xl font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                云
              </div>
              <a>门店</a>
              <a className="bg-[#fff4ec] px-10 py-2 text-[#c83f3b]">菜单</a>
              <a>线上点单</a>
            </div>
  
            {/* QR block */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-xl font-bold">微信小客服</div>
              <div className="flex h-28 w-28 items-center justify-center rounded-md bg-white text-xs font-bold text-[#c83f3b]">
                QR CODE
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom copyright */}
        <div className="relative flex h-16 items-center justify-center bg-[#fff4ec] text-[#c83f3b]">
          <div className="absolute left-40 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#c83f3b] font-bold">
            云
          </div>
  
          <p className="text-lg font-extrabold">
            © 2023 YUNSHANG RICE NOODLE. ALL RIGHTS RESERVED.
          </p>
  
          <div className="absolute right-40 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#c83f3b] font-bold">
            云
          </div>
        </div>
      </footer>
    );
  }