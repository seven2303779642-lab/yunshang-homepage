import HomePage from "@/components/home/HomePage";
import { enContent } from "@/data/siteContent";

export default function EnglishHomePage() {
  return <HomePage content={enContent} locale="en" />;
}
