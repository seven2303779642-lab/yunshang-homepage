import HomePage from "@/components/home/HomePage";
import { zhContent } from "@/data/siteContent";

export default function ChineseHomePage() {
  return <HomePage content={zhContent} locale="zh" />;
}
