export default function StoreBanner() {
    return (
      <section className="relative h-[520px] overflow-hidden bg-[#6b4b42]">
        <div className="absolute inset-0 bg-[#c83f3b]/65" />
  
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h2 className="text-6xl font-extrabold">
            全加拿大18家分店
          </h2>
  
          <p className="mt-6 text-2xl font-bold">
            寻找离您最近的云尚米线分店
          </p>
  
          <button className="btn mt-10 border-4 border-white bg-[#fff4ec] px-12 py-4 text-2xl font-extrabold text-[#c83f3b]">
            查看附近门店
          </button>
        </div>
  
        <div className="absolute left-20 top-1/2 flex -translate-y-1/2 gap-4 opacity-70">
          <span className="h-12 w-12 rounded-full bg-white/40" />
          <span className="h-8 w-8 rounded-full bg-white/30" />
          <span className="h-6 w-6 rounded-full bg-white/30" />
        </div>
      </section>
    );
  }