import { motion } from "framer-motion";
import { Building2, Plane, Mic, Home, Droplets, GraduationCap } from "lucide-react";
import founderImg from "@/assets/deepak-yadav.jpg";

const badges = [
  { icon: Building2, label: "Hospitality" },
  { icon: Plane, label: "Travel" },
  { icon: Mic, label: "Media" },
  { icon: Home, label: "Real Estate" },
  { icon: Droplets, label: "FMCG" },
  { icon: GraduationCap, label: "Student Living" },
];

const AboutFounder = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10"
          >
            <span className="inline-block text-xs sm:text-sm font-body font-medium text-accent uppercase tracking-widest mb-2">Meet the Visionary</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              About the <span className="text-primary">Founder</span>
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-3 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 lg:gap-10 items-center"
          >
            {/* Photo */}
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-xl" />
              <img
                src={founderImg}
                alt="Deepak Yadav - Founder of DSY Hospitality"
                className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 rounded-2xl object-cover shadow-xl border-4 border-white"
                loading="lazy"
              />
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 text-center md:text-left">Deepak Yadav</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                Deepak Yadav is the visionary founder behind DSY Hospitality Pvt. Ltd., 
                a rapidly growing ecosystem spanning hospitality, travel, media, premium living, and FMCG. 
                Based in Greater Noida, he leads six distinct brands that serve thousands of customers 
                across India. His passion lies in creating exceptional experiences — from booking the perfect 
                venue to delivering pure mineral water to every doorstep.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-accent pl-4 mb-5 bg-accent/5 py-3 pr-3 rounded-r-lg">
                <p className="font-heading text-base sm:text-lg text-foreground italic">
                  "Every guest interaction is an opportunity to build something extraordinary."
                </p>
              </blockquote>

              {/* Domain badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center md:justify-start">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-xs sm:text-sm font-body text-foreground/70 hover:bg-primary/10 transition-colors"
                  >
                    <badge.icon size={12} className="text-primary" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
