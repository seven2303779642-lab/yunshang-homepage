import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { enContent } from "@/data/siteContent";

export default function EnglishOrderPage() {
  return (
    <PlaceholderPage
      title={enContent.placeholderPages.order.title}
      subtitle={enContent.placeholderPages.order.subtitle}
      comingSoon={enContent.placeholderPages.comingSoon}
    />
  );
}
