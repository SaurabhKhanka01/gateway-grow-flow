import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AboutFounder from "@/components/AboutFounder";
import EcosystemSection from "@/components/EcosystemSection";
import ServicesSection from "@/components/ServicesSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QRShareModal from "@/components/QRShareModal";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onOpenQR={() => setQrOpen(true)} />
      <TrustStrip />
      <AboutFounder />
      <EcosystemSection />
      <ServicesSection />
      <LeadCaptureSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA onOpenQR={() => setQrOpen(true)} />
      <QRShareModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </div>
  );
};

export default Index;
