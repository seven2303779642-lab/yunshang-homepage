"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Language = "zh" | "en";

const navItems = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/about", zh: "关于", en: "About" },
  { href: "/menu", zh: "菜单", en: "Menu" },
  { href: "/stores", zh: "门店", en: "Stores" },
  { href: "/events", zh: "活动", en: "Events" },
];

const copy = {
  zh: {
    language: "English",
    order: "线上点单",
  },
  en: {
    language: "中文",
    order: "Order Online",
  },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>("zh");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("language");

    if (savedLanguage === "zh" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage === "zh" ? "zh-CN" : "en";
      document.documentElement.dataset.lang = savedLanguage;
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const currentCopy = copy[language];

  const navBaseClass = useMemo(
    () =>
      "relative isolate px-3 py-1 font-bold leading-none " +
      "before:pointer-events-none before:absolute before:inset-x-[-6px] before:inset-y-[-2px] before:-z-10 before:bg-white",
    [],
  );

  const navActiveClass =
    "!text-[var(--color-red)] before:opacity-100 before:scale-x-100 before:scale-y-100";

  const navInactiveClass =
    "text-white before:opacity-0 before:scale-x-50 before:scale-y-75 " +
    "transition-colors duration-300 before:transition-all before:duration-300 before:ease-out " +
    "hover:text-[var(--color-red)] hover:before:opacity-100 hover:before:scale-x-100 hover:before:scale-y-100";

  function getNavItemClass(active = false) {
    return cn(navBaseClass, active ? navActiveClass : navInactiveClass);
  }

  function getMobileNavItemClass(active = false) {
    return cn(
      "px-4 py-1 text-lg font-bold leading-none transition-colors duration-300",
      active
        ? "bg-white text-[var(--color-red)]"
        : "text-white hover:bg-white hover:text-[var(--color-red)]",
    );
  }

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function handleLanguageToggle() {
    const nextLanguage: Language = language === "zh" ? "en" : "zh";

    setLanguage(nextLanguage);
    window.localStorage.setItem("language", nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = nextLanguage;

    window.dispatchEvent(
      new CustomEvent("languagechange", {
        detail: { language: nextLanguage },
      }),
    );
  }

  function handleMobileLinkClick() {
    setMenuOpen(false);
  }

  function OrderButton({ className = "" }: { className?: string }) {
    return (
      <Link
        href="/order"
        onClick={() => setMenuOpen(false)}
        className={cn(
          "group relative block h-[46px] min-w-[168px] bg-[var(--color-red)]",
          className,
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-[3px] bg-white"
        />

        <div
          aria-hidden="true"
          className="absolute inset-[6px] bg-[var(--color-red)]"
        />

        <div className="absolute inset-[9px] z-20 flex items-center justify-center bg-transparent text-lg font-bold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-red)]">
          {currentCopy.order}
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 168 46"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
        >
          <g
            stroke="var(--color-red)"
            strokeLinecap="butt"
            className="transition-all duration-300 [stroke-width:1] group-hover:[stroke-width:2]"
          >
            <line x1="-4" y1="-4" x2="6" y2="6" />
            <line x1="172" y1="-4" x2="162" y2="6" />
            <line x1="-4" y1="50" x2="6" y2="40" />
            <line x1="172" y1="50" x2="162" y2="40" />
          </g>
        </svg>
      </Link>
    );
  }


  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-red)]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between px-5 min-[1025px]:min-h-[100px] min-[1025px]:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Go to home page"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logos/云尚-1.png"
            alt="Yunshang Rice Noodle"
            width={260}
            height={80}
            priority
            className="h-12 w-auto min-[1025px]:h-16"
          />
        </Link>

        <div
          className="hidden items-center gap-[54px] text-white min-[1025px]:flex"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <div className="grid grid-flow-col auto-cols-max items-center gap-7">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getNavItemClass(active)}
                  style={active ? { color: "var(--color-red)" } : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {item[language]}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={handleLanguageToggle}
              className={getNavItemClass(false)}
              aria-label="Toggle language"
            >
              {currentCopy.language}
            </button>
          </div>

          <div className="flex items-center">
            <OrderButton />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-white min-[1025px]:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="relative block h-5 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-[3px] w-6 bg-white transition-transform duration-300",
                menuOpen && "translate-y-[8px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[8px] h-[3px] w-6 bg-white transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[16px] h-[3px] w-6 bg-white transition-transform duration-300",
                menuOpen && "-translate-y-[8px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "fixed right-0 top-[76px] z-40 min-h-[calc(100vh-76px)] w-[270px]",
          "bg-[var(--color-red)] transition-transform duration-500 ease-in-out min-[1025px]:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div className="flex flex-col items-center gap-6 px-8 pt-16 text-white">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMobileLinkClick}
                className={getMobileNavItemClass(active)}
                style={active ? { color: "var(--color-red)" } : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item[language]}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={handleLanguageToggle}
            className={getMobileNavItemClass(false)}
            aria-label="Toggle language"
          >
            {currentCopy.language}
          </button>

          <OrderButton className="mt-2" />
        </div>
      </div>
    </nav>
  );
}
