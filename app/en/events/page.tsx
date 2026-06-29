import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { enContent } from "@/data/siteContent";

export default function EnglishEventsPage() {
  return (
    <PlaceholderPage
      title={enContent.placeholderPages.events.title}
      subtitle={enContent.placeholderPages.events.subtitle}
      comingSoon={enContent.placeholderPages.comingSoon}
    />
  );
}
