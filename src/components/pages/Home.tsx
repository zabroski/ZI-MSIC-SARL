import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
import ServicesPreview from "../sections/ServicesPreview";
import WhyChooseUs from "../sections/WhyChooseUs";
import ContactSection from "../sections/ContactSection";
import ITServicesSection from "../sections/ITServicesSection";
import BrochureSections from "../sections/BrochureSections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ITServicesSection />
      <BrochureSections />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
