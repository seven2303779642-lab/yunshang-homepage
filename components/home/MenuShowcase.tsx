"use client";

import BrandButton from "@/components/ui/BrandButton";
import type { SiteContent } from "@/data/siteContent";
import { useEffect, useRef } from "react";

const MENU_IMAGES = [
  {
    tag: "/images/home/menu-showcase/经典.png",
    image: "/images/home/menu-showcase/过桥米线.png",
  },
  {
    tag: "/images/home/menu-showcase/人气.png",
    image: "/images/home/menu-showcase/特色米线.png",
  },
  {
    tag: "/images/home/menu-showcase/必点.png",
    image: "/images/home/menu-showcase/凉菜小吃.png",
  },
];

type MotionTransforms = {
  backgroundX: number;
  leftY: number;
  rightY: number;
};

const DESKTOP_INITIAL: MotionTransforms = {
  backgroundX: 0,
  leftY: 0,
  rightY: 520,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function rangeProgress(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start), 0, 1);
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function getMotionTransforms(
  sectionRect: DOMRect,
  sectionHeight: number,
  viewportHeight: number,
  viewportWidth: number,
): MotionTransforms {
  const rawProgress = clamp(
    (viewportHeight - sectionRect.top) / (viewportHeight + sectionHeight),
    0,
    1,
  );

  if (viewportWidth < 768) {
    return {
      backgroundX: 0,
      leftY: 0,
      rightY: 520,
    };
  }

  const backgroundProgress = rangeProgress(rawProgress, 0.18, 0.9);
  const backgroundX = lerp(0, -160, backgroundProgress);

  if (viewportWidth <= 1024) {
    return {
      backgroundX,
      leftY: 0,
      rightY: 520,
    };
  }

  const leftProgress = rangeProgress(rawProgress, 0.08, 0.92);
  const rightProgress = rangeProgress(rawProgress, 0.08, 0.92);

  return {
    backgroundX,
    leftY: lerp(0, 520, leftProgress),
    rightY: lerp(520, 0, rightProgress),
  };
}

type MenuShowcaseProps = {
  content: SiteContent["home"]["menuShowcase"];
};

export default function MenuShowcase({ content }: MenuShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLImageElement | null>(null);
  const leftLabelRef = useRef<HTMLImageElement | null>(null);
  const rightLabelRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let frameId = 0;

    const applyTransforms = () => {
      const section = sectionRef.current;
      if (!section) return;

      const viewportWidth = window.innerWidth;

      const transforms = getMotionTransforms(
        section.getBoundingClientRect(),
        section.offsetHeight,
        window.innerHeight,
        viewportWidth,
      );

      if (backgroundRef.current) {
        const backgroundY = viewportWidth < 768 ? "-50%" : "-30%";
        backgroundRef.current.style.transform = `translate3d(calc(-50% + ${transforms.backgroundX}px), ${backgroundY}, 0)`;
      }

      if (leftLabelRef.current) {
        leftLabelRef.current.style.transform = `translate3d(0, ${transforms.leftY}px, 0)`;
      }

      if (rightLabelRef.current) {
        rightLabelRef.current.style.transform = `translate3d(0, ${transforms.rightY}px, 0)`;
      }
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(applyTransforms);
    };

    applyTransforms();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fff4ec] px-6 pt-20 pb-28 min-[1025px]:px-12 min-[1025px]:pt-28 min-[1025px]:pb-36"
    >
      <img
        ref={backgroundRef}
        src="/images/home/menu-showcase/背景云.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-0 w-[280vw] max-w-none select-none will-change-transform min-[768px]:w-[220vw]"
        style={{
          transform: `translate3d(calc(-50% + ${DESKTOP_INITIAL.backgroundX}px), -50%, 0)`,
        }}
        draggable={false}
      />

      <img
        ref={leftLabelRef}
        src="/images/home/menu-showcase/一碗好米线.png"
        alt={content.leftLabelAlt}
        className="pointer-events-none absolute left-7 top-28 z-10 hidden w-[116px] select-none will-change-transform min-[1025px]:block"
        style={{ transform: `translate3d(0, ${DESKTOP_INITIAL.leftY}px, 0)` }}
        draggable={false}
      />

      <img
        ref={rightLabelRef}
        src="/images/home/menu-showcase/半碗都是料.png"
        alt={content.rightLabelAlt}
        className="pointer-events-none absolute right-7 top-28 z-10 hidden w-[116px] select-none will-change-transform min-[1025px]:block"
        style={{ transform: `translate3d(0, ${DESKTOP_INITIAL.rightY}px, 0)` }}
        draggable={false}
      />

      <div className="relative z-20 mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-14 min-[768px]:max-[1024px]:flex min-[768px]:max-[1024px]:flex-col min-[768px]:max-[1024px]:gap-16 min-[1025px]:grid min-[1025px]:grid-cols-3 min-[1025px]:gap-16">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`text-center min-[768px]:max-[1024px]:flex min-[768px]:max-[1024px]:items-stretch min-[768px]:max-[1024px]:gap-10 min-[768px]:max-[1024px]:text-center ${
                index % 2 === 1
                  ? "min-[768px]:max-[1024px]:flex-row-reverse"
                  : "min-[768px]:max-[1024px]:flex-row"
              }`}
            >
              <div className="relative mx-auto w-full max-w-[360px] shrink-0 overflow-visible min-[768px]:max-[1024px]:mx-0 min-[768px]:max-[1024px]:w-[46%] min-[768px]:max-[1024px]:max-w-[400px] min-[1025px]:mx-auto min-[1025px]:w-auto">
                <div className="aspect-[304/390] w-full overflow-hidden">
                  <img
                    src={MENU_IMAGES[index].image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                <img
                  src={MENU_IMAGES[index].tag}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-12 w-[136px] rotate-[-8deg] select-none min-[1025px]:w-[146px]"
                  draggable={false}
                />
              </div>

              <div className="relative min-[768px]:max-[1024px]:min-h-0 min-[768px]:max-[1024px]:flex-1 min-[768px]:max-[1024px]:self-stretch">
                <div
                  className={`min-[768px]:max-[1024px]:absolute min-[768px]:max-[1024px]:inset-x-0 min-[768px]:max-[1024px]:top-0 min-[768px]:max-[1024px]:flex min-[768px]:max-[1024px]:items-center ${
                    index === content.items.length - 1
                      ? "min-[768px]:max-[1024px]:bottom-[62px]"
                      : "min-[768px]:max-[1024px]:bottom-0"
                  }`}
                >
                  <div className="w-full">
                    <div className="mt-2 flex items-center justify-center gap-3 leading-none min-[768px]:max-[1024px]:mt-0 min-[768px]:max-[1024px]:justify-center min-[1025px]:justify-center">
                      <img
                        src="/images/home/decorative/cloud-red-text.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 translate-y-[3px] select-none"
                        draggable={false}
                      />
                      <h3 className="type-menu-category-title !text-[var(--color-red)] !leading-none">{item.title}</h3>
                      <img
                        src="/images/home/decorative/cloud-red-text.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 translate-y-[3px] select-none"
                        draggable={false}
                      />
                    </div>

                    <p className="type-body-copy mx-auto mt-4 max-w-[360px] text-[#202020] min-[768px]:max-[1024px]:mx-auto min-[768px]:max-[1024px]:max-w-none">
                      {item.text}
                    </p>
                  </div>
                </div>

                {index === content.items.length - 1 && (
                  <div className="mt-8 hidden min-[768px]:max-[1024px]:absolute min-[768px]:max-[1024px]:bottom-0 min-[768px]:max-[1024px]:left-0 min-[768px]:max-[1024px]:mt-0 min-[768px]:max-[1024px]:block">
                    <BrandButton href={content.viewMenuHref}>{content.viewMenuButton}</BrandButton>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center min-[768px]:max-[1024px]:hidden">
          <BrandButton href={content.viewMenuHref}>{content.viewMenuButton}</BrandButton>
        </div>
      </div>
    </section>
  );
}
