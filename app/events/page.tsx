import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { zhContent } from "@/data/siteContent";

export default function EventsPage() {
  return (
    <PlaceholderPage
      title={zhContent.placeholderPages.events.title}
      subtitle={zhContent.placeholderPages.events.subtitle}
      comingSoon={zhContent.placeholderPages.comingSoon}
    />
  );
}
