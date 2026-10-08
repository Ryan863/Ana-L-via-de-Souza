import { Navbar } from "@/components/Navbar";
import { AuroraHero } from "@/components/AuroraHero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { LocationsSection } from "@/components/LocationsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#59493E] font-sans antialiased selection:bg-[#261C14] selection:text-[#FAF6F0] relative">
      <Navbar />
      <main>
        <AuroraHero />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <InstagramSection />
        <LocationsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
