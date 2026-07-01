import Link from "next/link";
import type { ReactNode } from "react";

type LanguageButtonProps = {
  href: string;
  children: ReactNode;
};

export default function LanguageButton({ href, children }: LanguageButtonProps) {
  return (
    <Link href={href} className="language-button">
      <span className="language-button__label">{children}</span>
    </Link>
  );
}
