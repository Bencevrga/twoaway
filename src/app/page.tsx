import Hero from "@/components/Hero";
import TripList from "@/components/TripList";
import AboutMini from "@/components/AboutMini";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <TripList />
      <AboutMini />
      <HowItWorks />
      <Pricing />
      <WhyUs />
      <Testimonials />
      <SocialSection />
      <ContactSection />
    </div>
  );
}
