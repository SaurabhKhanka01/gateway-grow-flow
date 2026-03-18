import { motion } from "framer-motion";
import { Building, Plane, Megaphone, Home, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Hospitality Management",
    description: "End-to-end hotel and venue operations delivering exceptional guest experiences and optimised revenue across multiple properties in Delhi NCR.",
    stat: "50+ Properties",
  },
  {
    icon: Plane,
    title: "Travel Booking & Curation",
    description: "Handpicked travel packages and curated experiences across India's most sought-after destinations. From flights to complete holiday packages.",
    stat: "Pan India",
  },
  {
    icon: Megaphone,
    title: "Media Promotion & Content",
    description: "Bold storytelling and fearless journalism that amplifies brand presence, highlights social issues, and engages audiences with impactful content.",
    stat: "Growing Audience",
  },
  {
    icon: Home,
    title: "Property Consulting",
    description: "Expert guidance on hospitality real estate, PG investments, and property partnerships. Ideal for investors looking for high-return opportunities.",
    stat: "Expert Guidance",
  },
  {
    icon: Users,
    title: "Student Living Solutions",
    description: "Premium PG accommodations designed for college students with modern amenities, metro connectivity, and a safe living environment.",
    stat: "4.8 Rating",
  },
  {
    icon: TrendingUp,
    title: "Brand Partnerships",
    description: "Strategic franchise and alliance opportunities across our ecosystem. Partner with India's fastest-growing hospitality group.",
    stat: "Open for Partners",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block text-xs sm:text-sm font-body font-medium text-accent uppercase tracking-widest mb-2">What We Do</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Comprehensive solutions across hospitality, travel, media, and real estate.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-3 sm:p-4 lg:p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all group card-shadow hover:card-shadow-hover"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon size={18} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1.5">
                {service.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3 sm:line-clamp-none">
                {service.description}
              </p>
              <span className="inline-block px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-body font-semibold">
                {service.stat}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
