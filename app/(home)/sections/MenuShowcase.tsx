"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menus = [
  {
    tag: "/images/menushowcase/经典.png",
    image: "/images/menushowcase/过桥米线.png",
    title: "过桥米线",
    text: "源自云南的非物质文化遗产，凭借“一汤锁鲜”的匠心智慧传承百年。云尚过桥米线提供多种汤底口味选择，并搭配12款精美配菜。食材与滚烫高汤分开出品，食用时按“先荤后素”依次烫熟，最后加入爽滑米线，滚烫高汤瞬间激发食材本味，鲜香扑鼻！",
  },
  {
    tag: "/images/menushowcase/人气.png",
    image: "/images/menushowcase/特色米线.png",
    title: "特色米线",
    text: "除了经典过桥米线，我们还将传统骨汤米线与独特风味完美融合，打造惊喜满满的特色米线系列！酸辣开胃的老坛酸菜鱼米线、甘香爽口的番茄肥牛米线、麻辣过瘾的川香爆肠旺米线……每一款都让人一口接一口，停不下来！还能自由搭配配菜，想怎么吃就怎么吃，打造你的专属米线体验！",
  },
  {
    tag: "/images/menushowcase/必点.png",
    image: "/images/menushowcase/凉菜小吃.png",
    title: "凉菜小吃",
    text: "云尚米线菜品丰富，除了经典米线，还有各式精美凉菜、小吃和甜品。香辣开胃的口水鸡、酸甜爽脆的土豆丝、每桌必点的夫妻肺片，款款都是开胃神器！还有盐酥鸡、奥尔良鸡翅、蒜泥炸豆腐等特色小吃，香酥可口，一口接一口，停不下来！",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function MenuShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateOffset = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const rawOffset = window.scrollY - sectionTop + window.innerHeight * 0.18;
      const nextOffset = clamp(rawOffset * 0.18, 0, 260);

      setScrollOffset(nextOffset);
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fff4ec] px-6 py-20 min-[1025px]:px-12 min-[1025px]:py-28"
    >
      <img
        src="/images/menushowcase/背景层.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-10%] h-full w-[120%] max-w-none select-none object-cover"
        style={{ transform: `translateX(${-scrollOffset * 0.65}px)` }}
        draggable={false}
      />

      <img
        src="/images/menushowcase/一碗好米线.png"
        alt="一碗好米线"
        className="pointer-events-none absolute left-7 top-24 z-10 hidden w-[116px] select-none min-[1280px]:block"
        style={{ transform: `translateY(${scrollOffset}px)` }}
        draggable={false}
      />

      <img
        src="/images/menushowcase/半碗都是料.png"
        alt="半碗都是料"
        className="pointer-events-none absolute bottom-20 right-7 z-10 hidden w-[116px] select-none min-[1280px]:block"
        style={{ transform: `translateY(${-scrollOffset}px)` }}
        draggable={false}
      />

      <div className="relative z-20 mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-14 min-[900px]:grid-cols-3 min-[1025px]:gap-16">
          {menus.map((item) => (
            <article key={item.title} className="text-center">
              <div className="relative mx-auto max-w-[360px] overflow-visible">
                <div className="aspect-[304/390] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                <img
                  src={item.tag}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-12 w-[136px] rotate-[-8deg] select-none min-[1025px]:w-[146px]"
                  draggable={false}
                />
              </div>

              <div className="mt-7 flex items-center justify-center gap-3">
                <img
                  src="/images/云-红字.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 select-none"
                  draggable={false}
                />
                <h3
                  className="text-[36px] font-medium leading-none text-[var(--color-red)] min-[1025px]:text-[40px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <img
                  src="/images/云-红字.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 rotate-180 select-none"
                  draggable={false}
                />
              </div>

              <p className="mx-auto mt-5 max-w-[360px] text-[16px] font-semibold leading-[2] text-[#202020]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/menu"
            className="group relative block h-[50px] min-w-[220px] bg-[var(--color-red)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-[4px] bg-white"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[7px] bg-[var(--color-red)]"
            />
            <div className="absolute inset-[10px] z-20 flex items-center justify-center bg-transparent text-[20px] font-bold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)]">
              查看菜单
            </div>

            <svg
              aria-hidden="true"
              viewBox="0 0 220 50"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
            >
              <g
                stroke="var(--color-red)"
                strokeLinecap="butt"
                className="transition-all duration-300 [stroke-width:1] group-hover:[stroke-width:2]"
              >
                <line x1="-4" y1="-4" x2="8" y2="8" />
                <line x1="224" y1="-4" x2="212" y2="8" />
                <line x1="-4" y1="54" x2="8" y2="42" />
                <line x1="224" y1="54" x2="212" y2="42" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
