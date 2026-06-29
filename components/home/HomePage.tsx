import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Locale, SiteContent } from "@/data/siteContent";
import AboutIntro from "./AboutIntro";
import FeatureCards from "./FeatureCards";
import HeroSlider from "./HeroSlider";
import MenuShowcase from "./MenuShowcase";
import OrderBanner from "./OrderBanner";
import StoreBanner from "./StoreBanner";

type HomePageProps = {
  content: SiteContent;
  locale: Locale;
};

export default function HomePage({ content }: HomePageProps) {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider content={content.home.heroSlider} />
        <AboutIntro content={content.home.aboutIntro} />
        <FeatureCards content={content.home.featureCards} />
        <StoreBanner content={content.home.storeBanner} />
        <MenuShowcase content={content.home.menuShowcase} />
        <OrderBanner content={content.home.orderBanner} />
      </main>
      <Footer />
    </>
  );
}
