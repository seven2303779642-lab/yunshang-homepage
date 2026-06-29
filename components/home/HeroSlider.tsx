"use client";

import type { SiteContent } from "@/data/siteContent";
import { useEffect, useState } from "react";

const AUTO_PLAY_INTERVAL = 4500;

const SLIDE_IMAGES = [
  {
    desktop: "/images/hero-sliders/desktop/slider-1.jpg",
    mobile: "/images/hero-sliders/mobile/slider-1.jpg",
  },
  {
    desktop: "/images/hero-sliders/desktop/slider-2.jpg",
    mobile: "/images/hero-sliders/mobile/slider-2.jpg",
  },
  {
    desktop: "/images/hero-sliders/desktop/slider-3.jpg",
    mobile: "/images/hero-sliders/mobile/slider-3.jpg",
  },
  {
    desktop: "/images/hero-sliders/desktop/slider-4.jpg",
    mobile: "/images/hero-sliders/mobile/slider-4.jpg",
  },
  {
    desktop: "/images/hero-sliders/desktop/slider-5.jpg",
    mobile: "/images/hero-sliders/mobile/slider-5.jpg",
  },
];

type HeroSliderProps = {
  content: SiteContent["home"]["heroSlider"];
};

export default function HeroSlider({ content }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % SLIDE_IMAGES.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[530px] min-[1025px]:h-[775px] overflow-hidden bg-black">
      {SLIDE_IMAGES.map((slide, index) => (
        <picture
          key={slide.desktop}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            activeIndex === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <source media="(max-width: 1024px)" srcSet={slide.mobile} />
          <img
            src={slide.desktop}
            alt={content.slideAlts[index]}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </picture>
      ))}

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 min-[1025px]:bottom-6">
        {SLIDE_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={content.slideIndicatorAriaLabelTemplate.replace(
              "{n}",
              String(index + 1),
            )}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "scale-110 bg-[#c83f3b]"
                : "bg-white/90 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
