import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "./(home)/sections/HeroSlider";
import AboutIntro from "./(home)/sections/AboutIntro";
import FeatureCards from "./(home)/sections/FeatureCards";
import StoreBanner from "./(home)/sections/StoreBanner";
import MenuShowcase from "./(home)/sections/MenuShowcase";
import OrderBanner from "./(home)/sections/OrderBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <AboutIntro />
        <FeatureCards />
        <StoreBanner />
        <MenuShowcase />
        <OrderBanner />
      </main>
      <Footer />
    </>
  );
}