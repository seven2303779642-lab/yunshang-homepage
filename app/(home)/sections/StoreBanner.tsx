import Link from "next/link";

export default function StoreBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden bg-black min-[1025px]:h-[520px]">
      <img
        src="/images/门店.jpg"
        alt="云尚米线门店环境"
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h2
          className="text-[40px] font-medium leading-none min-[1025px]:text-[48px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          全加拿大18家分店
        </h2>

        <p className="mt-6 text-[16px] font-semibold leading-none">
          寻找离您最近的云尚米线分店
        </p>

        <div className="relative mt-7 inline-flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute right-[calc(100%+28px)] top-1/2 hidden -translate-y-1/2 items-center gap-3 min-[768px]:flex"
          >
            <span className="h-6 w-6 rounded-full bg-white/70" />
            <span className="h-5 w-5 rounded-full bg-white/70" />
            <span className="h-4 w-4 rounded-full bg-white/70" />
            <span className="h-3 w-3 rounded-full bg-white/70" />
          </div>

          <Link
            href="/stores"
            className="group relative block h-[50px] min-w-[220px] bg-[var(--color-red)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-[4px] bg-white"
            />

            <div className="absolute inset-[8px] z-20 flex items-center justify-center bg-white text-[20px] font-bold leading-none text-[var(--color-red)] transition-colors duration-300 group-hover:bg-[var(--color-red)] group-hover:text-white">
              查看附近门店
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
                <line x1="-4" y1="-4" x2="1" y2="1" />
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
