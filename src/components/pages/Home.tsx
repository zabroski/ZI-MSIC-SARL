// import Hero from "../components/sections/Hero";
import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
// import AboutPreview from "../components/sections/AboutPreview";
// import ServicesPreview from "../components/sections/ServicesPreview";
import ServicesPreview from "../sections/ServicesPreview";
// import WhyChooseUs from "../components/sections/WhyChooseUs";
import WhyChooseUs from "../sections/WhyChooseUs";
// import ContactSection from "../components/sections/ContactSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
