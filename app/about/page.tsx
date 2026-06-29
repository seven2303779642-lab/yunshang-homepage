import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { zhContent } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <PlaceholderPage
      title={zhContent.placeholderPages.about.title}
      subtitle={zhContent.placeholderPages.about.subtitle}
      comingSoon={zhContent.placeholderPages.comingSoon}
    />
  );
}
