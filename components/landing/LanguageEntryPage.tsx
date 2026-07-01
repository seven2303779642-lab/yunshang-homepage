import LanguageButton from "@/components/landing/LanguageButton";
import type { WelcomeContent } from "@/data/content/types";
import Image from "next/image";

type LanguageEntryPageProps = {
  content: WelcomeContent;
};

export default function LanguageEntryPage({ content }: LanguageEntryPageProps) {
  return (
    <div className="language-entry">
      <img
        src={content.backgroundImage}
        alt=""
        className="language-entry__background"
        draggable={false}
        aria-hidden="true"
      />

      <div className="language-entry__overlay" aria-hidden="true" />

      <img
        src={content.cloudTopLeft}
        alt=""
        className="language-entry__cloud language-entry__cloud--top-left"
        draggable={false}
        aria-hidden="true"
      />

      <img
        src={content.cloudBottomRight}
        alt=""
        className="language-entry__cloud language-entry__cloud--bottom-right"
        draggable={false}
        aria-hidden="true"
      />

      <img
        src={content.whiteIcon}
        alt=""
        className="language-entry__white-icon language-entry__white-icon--left"
        draggable={false}
        aria-hidden="true"
      />

      <img
        src={content.whiteIcon}
        alt=""
        className="language-entry__white-icon language-entry__white-icon--right"
        draggable={false}
        aria-hidden="true"
      />

      <div className="language-entry__content">
        <Image
          src={content.logoImage}
          alt={content.logoAlt}
          width={606}
          height={437}
          priority
          className="language-entry__logo"
        />

        <img
          src={content.whiteIcon}
          alt=""
          className="language-entry__logo-mark"
          draggable={false}
          aria-hidden="true"
        />

        <div className="language-entry__actions">
          <LanguageButton href={content.chineseHref}>
            {content.chineseButton}
          </LanguageButton>
          <LanguageButton href={content.englishHref}>
            {content.englishButton}
          </LanguageButton>
        </div>
      </div>
    </div>
  );
}
