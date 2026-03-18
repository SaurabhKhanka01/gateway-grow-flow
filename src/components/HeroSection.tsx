import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Share2 } from "lucide-react";
import GoldParticles from "./GoldParticles";

interface HeroSectionProps {
  onOpenQR: () => void;
}

const HeroSection = ({ onOpenQR }: HeroSectionProps) => {
  const whatsappNumber = "919999999999";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      <GoldParticles />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-body text-primary tracking-wide">Digital Business Gateway</span>
          </motion.div>

          {/* Name */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            <span className="text-primary gold-text-glow">Deepak Yadav</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2"
          >
            Founder & Director
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-base sm:text-lg text-primary/80 mb-8"
          >
            DSY Hospitality Pvt. Ltd.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Building Experiences Across Hospitality, Travel & Media
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-gold-hover transition-colors min-w-[180px] justify-center"
              aria-label="Call Deepak Yadav"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak, I visited your portfolio and would like to connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary/10 transition-colors min-w-[180px] justify-center"
              aria-label="WhatsApp Deepak Yadav"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <button
              onClick={onOpenQR}
              className="flex items-center gap-2 px-8 py-3 border border-border text-foreground font-body font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors min-w-[180px] justify-center"
              aria-label="Share Portfolio"
            >
              <Share2 size={18} />
              Share
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#trust" aria-label="Scroll down">
            <ChevronDown className="text-primary animate-bounce" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
