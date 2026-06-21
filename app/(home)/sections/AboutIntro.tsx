export default function AboutIntro() {
    return (
      <section className="grid min-h-[560px] grid-cols-2 bg-[#c83f3b] text-white">
        <div className="flex flex-col justify-center px-24">
          <h2 className="text-5xl font-extrabold leading-tight">
            一碗有温度的米线，
            <br />
            从匠心开始
          </h2>
  
          <p className="mt-8 max-w-[620px] text-lg font-semibold leading-9">
            云尚米线，传承云南百年米线文化。以滚烫鲜骨浓汤激发食材本味，
            醇厚鲜香，一口暖心。
          </p>
  
          <p className="mt-10 text-3xl font-bold">
            “不想做饭？来碗云尚米线！”
          </p>
  
          <button className="btn btn-outline-white mt-12 w-fit">
            关于云尚
          </button>
        </div>
  
        <div className="relative bg-[#7a5a3d] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-4xl font-bold">Video / Image</div>
  
          <button className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white text-4xl">
            ▶
          </button>
        </div>
      </section>
    );
  }