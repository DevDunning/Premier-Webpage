import Hero from "@/app/sections/Hero";
import TrustBar from "@/app/sections/TrustBar";
import FeaturedShowcase from "@/app/sections/FeaturedShowcase";
import Promotions from "@/app/sections/Promotions";
import BrandCarousel from "@/app/sections/Brandcar";
import WhyUs from "@/app/sections/WhyUs";
import Services from "@/app/sections/Services";
import Categories from "@/app/sections/Categories";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustBar />
      <FeaturedShowcase />
      <Promotions />
      <BrandCarousel />
      <WhyUs />
      <Services />
      <Categories />
      <Contact />
    </main>
  );
}