import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { enContent } from "@/data/siteContent";

export default function EnglishStoresPage() {
  return (
    <PlaceholderPage
      title={enContent.placeholderPages.stores.title}
      subtitle={enContent.placeholderPages.stores.subtitle}
      comingSoon={enContent.placeholderPages.comingSoon}
    />
  );
}
