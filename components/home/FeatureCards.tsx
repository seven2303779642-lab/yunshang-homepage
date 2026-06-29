import type { SiteContent } from "@/data/siteContent";

const FEATURE_IMAGES = [
  {
    image: "/images/home/feature-cards/fc1-1.png",
    icon: "/images/home/feature-cards/fc1-2.png",
  },
  {
    image: "/images/home/feature-cards/fc2-1.png",
    icon: "/images/home/feature-cards/fc2-2.png",
  },
  {
    image: "/images/home/feature-cards/fc3-1.png",
    icon: "/images/home/feature-cards/fc3-2.png",
  },
];

type FeatureCardsProps = {
  content: SiteContent["home"]["featureCards"];
};

export default function FeatureCards({ content }: FeatureCardsProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff4ec] px-[10px] py-[100px] min-[768px]:px-[50px] min-[1025px]:flex min-[1025px]:h-[700px] min-[1025px]:items-center min-[1025px]:py-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/images/home/feature-cards/featurecard-background.png")',
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full grid-cols-1 justify-items-center gap-6 min-[768px]:grid-cols-[repeat(3,calc((100vw-100px-48px)/3))] min-[768px]:justify-center min-[1025px]:max-h-full">
        {content.features.map((feature, index) => (
          <article
            key={feature.title}
            className="grid w-full max-w-[370px] grid-rows-[auto_1fr] overflow-hidden bg-[var(--color-red)] text-white min-[768px]:max-w-none min-[768px]:w-[calc((100vw-100px-48px)/3)]"
          >
            <div className="aspect-[368/176] w-full overflow-hidden">
              <img
                src={FEATURE_IMAGES[index].image}
                alt={feature.imageAlt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="grid grid-rows-[auto_auto_1fr] px-7 pb-8 pt-4 min-[768px]:grid-rows-[52px_auto_1fr] min-[1025px]:px-8">
              <h3 className="type-feature-title flex items-center justify-center text-center">
                {feature.mobileTitleLines ? (
                  <>
                    <span className="min-[768px]:hidden">
                      {feature.mobileTitleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                    <span
                      className={`hidden min-[768px]:inline ${feature.nowrap ? "whitespace-nowrap" : ""}`}
                    >
                      {feature.title}
                    </span>
                  </>
                ) : (
                  <span className={feature.nowrap ? "whitespace-nowrap" : ""}>
                    {feature.title}
                  </span>
                )}
              </h3>

              <div className="mx-auto mt-5 h-[2px] w-[85%] bg-white/90" />

              <div className="mt-7 grid grid-cols-1 justify-items-center gap-6 min-[768px]:grid-cols-[92px_1fr] min-[768px]:items-center min-[768px]:justify-items-stretch min-[1025px]:grid-cols-[96px_1fr] min-[1025px]:gap-8">
                <img
                  src={FEATURE_IMAGES[index].icon}
                  alt={feature.iconAlt}
                  className="w-[250px] max-w-full select-none min-[768px]:w-[92px] min-[1025px]:w-[96px]"
                  draggable={false}
                />

                <p className="type-body-copy-emphasis text-center text-white min-[768px]:text-left">
                  {feature.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
