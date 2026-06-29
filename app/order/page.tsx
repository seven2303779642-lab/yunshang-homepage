import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { zhContent } from "@/data/siteContent";

export default function OrderPage() {
  return (
    <PlaceholderPage
      title={zhContent.placeholderPages.order.title}
      subtitle={zhContent.placeholderPages.order.subtitle}
      comingSoon={zhContent.placeholderPages.comingSoon}
    />
  );
}
