import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Share2, ArrowRight } from "lucide-react";
import founderImg from "@/assets/deepak-yadav.jpg";

interface HeroSectionProps {
  onOpenQR: () => void;
}

const HeroSection = ({ onOpenQR }: HeroSectionProps) => {
  const whatsappNumber = "919058522279";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/8 via-accent/5 to-transparent rounded-full -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/6 via-primary/4 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-body text-primary font-medium tracking-wide">Digital Business Gateway</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
              <span className="text-primary">Deepak Yadav</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-xl sm:text-2xl text-foreground/70 mb-1"
            >
              Founder & Director
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="font-body text-base text-accent font-semibold mb-6"
            >
              DSY Hospitality Pvt. Ltd.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Building Experiences Across Hospitality, Travel & Media — powering 6 brands, 50+ properties, and serving thousands of customers across India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                aria-label="Call Deepak Yadav"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak, I visited your portfolio and would like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[hsl(142_70%_45%)] text-white font-body font-semibold rounded-xl hover:bg-[hsl(142_70%_40%)] transition-all shadow-lg shadow-[hsl(142_70%_45%/0.2)]"
                aria-label="WhatsApp Deepak Yadav"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="#ecosystem"
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary/20 text-primary font-body font-semibold rounded-xl hover:bg-primary/5 transition-all"
              >
                Explore Ventures
                <ArrowRight size={16} />
              </a>
              <button
                onClick={onOpenQR}
                className="flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground font-body rounded-xl hover:border-primary hover:text-primary transition-all"
                aria-label="Share Portfolio"
              >
                <Share2 size={16} />
                Share
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Founder image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl blur-2xl" />
              <img
                src={founderImg}
                alt="Deepak Yadav - Founder & Director, DSY Hospitality Pvt. Ltd."
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border-4 border-white/80"
                loading="eager"
              />
              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-shadow border border-border"
              >
                <p className="font-heading text-2xl font-bold text-primary">6</p>
                <p className="text-xs font-body text-muted-foreground">Active Brands</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-card rounded-xl p-4 card-shadow border border-border"
              >
                <p className="font-heading text-2xl font-bold text-accent">50+</p>
                <p className="text-xs font-body text-muted-foreground">Properties</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

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
