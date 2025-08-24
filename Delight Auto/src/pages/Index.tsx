import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EdgeSection from "@/components/EdgeSection";
import ReadySection from "@/components/ReadySection";
import ForgedExcellenceSection from "@/components/ForgedExcellenceSection";
import CertificateSection from "@/components/CertificateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EdgeSection />
      <ReadySection />
      <ForgedExcellenceSection />
      <CertificateSection />
      <Footer />
    </div>
  );
};

export default Index;
