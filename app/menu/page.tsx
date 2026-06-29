import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { zhContent } from "@/data/siteContent";

export default function MenuPage() {
  return (
    <PlaceholderPage
      title={zhContent.placeholderPages.menu.title}
      subtitle={zhContent.placeholderPages.menu.subtitle}
      comingSoon={zhContent.placeholderPages.comingSoon}
    />
  );
}
