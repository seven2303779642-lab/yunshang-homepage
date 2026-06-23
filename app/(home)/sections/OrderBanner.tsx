import Link from "next/link";

type OrderButtonProps = {
  href: string;
  children: React.ReactNode;
};

function OrderButton({ href, children }: OrderButtonProps) {
  return (
    <Link
      href={href}
      className="group relative block h-[46px] min-w-[184px] bg-white"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-[4px] bg-[var(--color-red)]"
      />

      <div className="absolute inset-[7px] z-20 flex items-center justify-center bg-transparent text-[20px] font-bold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)]">
        {children}
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 184 46"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
      >
        <g
          stroke="white"
          strokeLinecap="butt"
          className="transition-all duration-300 [stroke-width:1] group-hover:[stroke-width:2]"
        >
          <line x1="-5" y1="-5" x2="16" y2="16" />
          <line x1="189" y1="-5" x2="168" y2="16" />
          <line x1="-5" y1="51" x2="16" y2="30" />
          <line x1="189" y1="51" x2="168" y2="30" />
        </g>
      </svg>
    </Link>
  );
}

export default function OrderBanner() {
  return (
    <section className="relative h-[360px] overflow-hidden bg-black text-white min-[1025px]:h-[403px]">
      <img
        src="/images/orderbanner.png"
        alt="云尚米线热汤和米线"
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center min-[1025px]:translate-y-7">
        <h2
          className="text-[36px] font-medium leading-tight min-[768px]:text-[44px] min-[1025px]:text-[48px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          累了别开火,来碗热乎的!
        </h2>

        <p
          className="mt-7 text-[32px] font-medium leading-tight min-[768px]:text-[42px] min-[1025px]:text-[48px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          价格实惠,份量实在
        </p>

        <div className="mt-12 flex flex-col items-center gap-5 min-[768px]:flex-row min-[768px]:gap-[120px]">
          <OrderButton href="/order">自取外卖</OrderButton>
          <OrderButton href="/order">送餐到家</OrderButton>
        </div>
      </div>
    </section>
  );
}
