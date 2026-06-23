import Link from "next/link";

type StoresButtonProps = {
  className?: string;
};

export default function StoresButton({ className = "" }: StoresButtonProps) {
  return (
    <Link
      href="/stores"
      className={`group relative block h-[50px] min-w-[220px] bg-[var(--color-red)] ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <div aria-hidden="true" className="absolute inset-[4px] bg-white" />

      <div
        aria-hidden="true"
        className="absolute inset-[7px] bg-[var(--color-red)]"
      />

      <div className="absolute inset-[10px] z-20 flex items-center justify-center bg-transparent text-[20px] font-normal leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)] min-[768px]:text-[26px]">
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
          <line x1="1" y1="1" x2="8" y2="8" />
          <line x1="219" y1="1" x2="212" y2="8" />
          <line x1="1" y1="49" x2="8" y2="42" />
          <line x1="219" y1="49" x2="212" y2="42" />
        </g>
      </svg>
    </Link>
  );
}
