import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { enContent } from "@/data/siteContent";

export default function EnglishAboutPage() {
  return (
    <PlaceholderPage
      title={enContent.placeholderPages.about.title}
      subtitle={enContent.placeholderPages.about.subtitle}
      comingSoon={enContent.placeholderPages.comingSoon}
    />
  );
}
