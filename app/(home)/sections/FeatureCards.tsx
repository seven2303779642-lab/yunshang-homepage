const features = [
    {
      title: "12小时鲜骨熬汤",
      icon: "12+ HRS",
      text: "只用猪骨、老母鸡、火腿等新鲜好料，天天熬汤看得见。",
    },
    {
      title: "米线无限续",
      icon: "∞",
      text: "纯大米米线，堂食无限量供应，想续就续。",
    },
    {
      title: "新鲜食材，本地优选",
      icon: "FRESH",
      text: "实打实的真材实料，品质无忧，每一口都放心。",
    },
  ];
  
  export default function FeatureCards() {
    return (
      <section className="relative bg-[#fff4ec] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 wave-bg" />
  
        <div className="container relative z-10 grid grid-cols-3 gap-8">
          {features.map((feature) => (
            <article key={feature.title} className="bg-[#c83f3b] text-white">
              <div className="h-64 bg-[#d8b08a] flex items-center justify-center text-3xl font-bold">
                Image
              </div>
  
              <div className="p-10">
                <h3 className="text-center text-4xl font-extrabold">
                  {feature.title}
                </h3>
  
                <div className="my-7 h-px bg-white" />
  
                <div className="grid grid-cols-[150px_1fr] gap-8 items-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-white text-2xl font-bold">
                    {feature.icon}
                  </div>
  
                  <p className="text-lg font-semibold leading-8">
                    {feature.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }