const menus = [
    {
      tag: "经典",
      title: "过桥米线",
      text: "源自云南的非物质文化遗产，先借一汤锁鲜，再依次烫熟配菜。",
    },
    {
      tag: "人气",
      title: "特色米线",
      text: "多种米线风味组合，打造丰富满满的特色体验。",
    },
    {
      tag: "必点",
      title: "凉菜小吃",
      text: "小吃和甜品选择丰富，一口接一口，停不下来。",
    },
  ];
  
  export default function MenuShowcase() {
    return (
      <section className="relative overflow-hidden bg-[#fff4ec] py-24">
        <div className="absolute inset-0 opacity-25 wave-bg" />
  
        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-[180px_1fr_180px] gap-10 px-12">
          <aside className="flex items-center justify-center">
            <h2 className="vertical-writing text-6xl font-extrabold leading-tight text-[#c83f3b]">
              一碗好米线
            </h2>
          </aside>
  
          <div className="grid grid-cols-3 gap-14">
            {menus.map((item) => (
              <article key={item.title} className="text-center">
                <div className="relative">
                  <div className="h-[360px] bg-[#d7a071] flex items-center justify-center text-3xl font-bold text-white">
                    Image
                  </div>
  
                  <div className="absolute -right-8 -top-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#c83f3b] text-3xl font-extrabold text-white">
                    {item.tag}
                  </div>
                </div>
  
                <h3 className="mt-8 text-5xl font-extrabold text-[#c83f3b]">
                  {item.title}
                </h3>
  
                <p className="mx-auto mt-6 max-w-[360px] text-lg font-semibold leading-9 text-[#222]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
  
          <aside className="flex items-center justify-center">
            <h2 className="vertical-writing text-6xl font-extrabold leading-tight text-[#c83f3b]">
              半碗都是料
            </h2>
          </aside>
        </div>
      </section>
    );
  }