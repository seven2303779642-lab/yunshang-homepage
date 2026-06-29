import HomePage from "@/components/home/HomePage";
import { zhContent } from "@/data/siteContent";

export default function Home() {
  return <HomePage content={zhContent} locale="zh" />;
}
