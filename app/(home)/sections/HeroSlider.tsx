export default function HeroSlider() {
    return (
      <section className="relative h-[640px] bg-[#fff4ec] overflow-hidden">
        <div className="container h-full relative flex items-center">
          <div className="z-10 max-w-[620px]">
            <div className="inline-block bg-[#f8b326] px-10 py-3 text-4xl font-extrabold text-white">
              云尚6月儿童月
            </div>
  
            <h1 className="mt-8 text-[92px] leading-[0.95] font-extrabold text-[#ef5a45]">
              宝贝有惊喜
              <br />
              免费领玩具
            </h1>
  
            <p className="mt-6 inline-block rounded-full bg-[#77c7ee] px-6 py-3 text-2xl font-bold text-white">
              FREE TOY FOR KIDS
            </p>
          </div>
  
          <div className="absolute right-16 bottom-0 h-[520px] w-[520px] rounded-full bg-[#ffe3a6]" />
          <div className="absolute right-32 bottom-16 h-[380px] w-[380px] rounded-full bg-white/70 flex items-center justify-center text-4xl font-bold text-[#c83f3b]">
            Kid Image
          </div>
  
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            <span className="h-3 w-3 rounded-full bg-[#c83f3b]" />
            <span className="h-3 w-3 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 h-24 w-full bg repeating-grid" />
      </section>
    );
  }