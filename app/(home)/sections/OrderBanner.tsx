export default function OrderBanner() {
    return (
      <section className="relative h-[480px] overflow-hidden bg-[#6d4b34] text-white">
        <div className="absolute inset-0 bg-black/25" />
  
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h2 className="text-6xl font-extrabold leading-tight">
            累了别开火，来碗热乎的！
          </h2>
  
          <p className="mt-8 text-5xl font-extrabold">
            价格实惠，份量实在
          </p>
  
          <div className="mt-12 flex gap-10">
            <button className="btn border-4 border-white bg-[#c83f3b] px-12 py-4 text-2xl text-white">
              自取外卖
            </button>
  
            <button className="btn border-4 border-white bg-[#c83f3b] px-12 py-4 text-2xl text-white">
              送餐到家
            </button>
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 h-28 w-full overflow-hidden bg-[#000000]">
          <div className="flex h-full items-end opacity-90">
            {Array.from({ length: 34 }).map((_, index) => (
              <div
                key={index}
                className="h-24 w-24 shrink-0 rounded-t-full border-2 border-white border-b-0"
              />
            ))}
          </div>
        </div>
        
      </section>
    );
  }