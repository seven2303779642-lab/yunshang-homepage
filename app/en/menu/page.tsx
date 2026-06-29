import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { enContent } from "@/data/siteContent";

export default function EnglishMenuPage() {
  return (
    <PlaceholderPage
      title={enContent.placeholderPages.menu.title}
      subtitle={enContent.placeholderPages.menu.subtitle}
      comingSoon={enContent.placeholderPages.comingSoon}
    />
  );
}
