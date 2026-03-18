import { motion } from "framer-motion";
import { Building2, Plane, Mic, Home } from "lucide-react";

const badges = [
  { icon: Building2, label: "Hospitality" },
  { icon: Plane, label: "Travel" },
  { icon: Mic, label: "Media" },
  { icon: Home, label: "Real Estate" },
];

const AboutFounder = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              About the <span className="text-primary">Founder</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center"
          >
            {/* Photo placeholder */}
            <div className="relative mx-auto md:mx-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary border border-primary/30 flex items-center justify-center gold-glow">
                <span className="font-heading text-6xl text-primary font-bold">DY</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
                Deepak Yadav is the visionary founder behind DSY Hospitality Pvt. Ltd., 
                a rapidly growing ecosystem spanning hospitality, travel, media, and premium living. 
                With a passion for creating exceptional experiences, he leads six distinct brands 
                that serve thousands of customers across India.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-primary pl-4 mb-8">
                <p className="font-heading text-lg sm:text-xl text-primary italic">
                  "Every guest interaction is an opportunity to build something extraordinary."
                </p>
              </blockquote>

              {/* Domain badges */}
              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-body text-muted-foreground"
                  >
                    <badge.icon size={14} className="text-primary" />
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
