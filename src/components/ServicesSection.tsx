import { motion } from "framer-motion";
import { Building, Plane, Megaphone, Home } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Hospitality Management",
    description: "End-to-end hotel and venue operations delivering exceptional guest experiences and optimised revenue.",
  },
  {
    icon: Plane,
    title: "Travel Booking & Curation",
    description: "Handpicked travel packages and curated experiences across India's most sought-after destinations.",
  },
  {
    icon: Megaphone,
    title: "Media Promotion & Content",
    description: "Bold storytelling and content strategies that amplify brand presence and engage audiences.",
  },
  {
    icon: Home,
    title: "Property Consulting",
    description: "Expert guidance on hospitality real estate, PG investments, and property partnerships.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
