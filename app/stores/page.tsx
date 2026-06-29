import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { zhContent } from "@/data/siteContent";

export default function StoresPage() {
  return (
    <PlaceholderPage
      title={zhContent.placeholderPages.stores.title}
      subtitle={zhContent.placeholderPages.stores.subtitle}
      comingSoon={zhContent.placeholderPages.comingSoon}
    />
  );
}
