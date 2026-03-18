import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const brands = [
  {
    name: "My Best Venue",
    category: "Venue Discovery",
    filter: "Hotels",
    url: "https://mybestvenue.com",
    description: "Discover and book the perfect venue for every occasion across India.",
    color: "from-amber-500/20 to-orange-600/10",
  },
  {
    name: "Yatra Adda",
    category: "Travel & Experiences",
    filter: "Travel",
    url: "https://yatraadda.com",
    description: "Curated travel experiences that transform journeys into stories.",
    color: "from-blue-500/20 to-cyan-600/10",
  },
  {
    name: "The Hestia Hotels Group",
    category: "Hospitality",
    filter: "Hotels",
    url: "https://thehestiahotels.com",
    description: "Premium hotel stays with world-class hospitality standards.",
    color: "from-purple-500/20 to-violet-600/10",
  },
  {
    name: "The Bold Mic",
    category: "Media & Content",
    filter: "Media",
    url: "https://theboldmic.com",
    description: "Bold stories and media content that captivate and inspire.",
    color: "from-red-500/20 to-rose-600/10",
  },
  {
    name: "DSY Luxury PG",
    category: "Premium PG Stays",
    filter: "PG",
    url: "https://dsyluxurypg.in",
    description: "Luxury paying guest accommodations for the modern professional.",
    color: "from-emerald-500/20 to-green-600/10",
  },
  {
    name: "Him Tara",
    category: "Hill Destination Stay",
    filter: "Travel",
    url: "https://himtara.in",
    description: "Serene hill destination stays amidst nature's finest landscapes.",
    color: "from-teal-500/20 to-sky-600/10",
  },
];

const filters = ["All", "Hotels", "Travel", "Media", "PG"];

const EcosystemSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? brands : brands.filter((b) => b.filter === activeFilter);

  return (
    <section id="ecosystem" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            The <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Six brands. One vision. Explore the DSY Hospitality universe.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </motion.div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((brand, i) => (
            <motion.a
              key={brand.name}
              href={`${brand.url}?utm_source=dsy_portfolio&utm_medium=brand_card&utm_campaign=ecosystem`}
              target="_blank"
              rel="noopener noreferrer"
              id={brand.name.toLowerCase().replace(/\s+/g, "-")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative block rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:gold-glow"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Logo placeholder */}
                <div className="w-14 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                  <span className="font-heading text-xl font-bold text-primary">
                    {brand.name.charAt(0)}
                  </span>
                </div>

                {/* Category tag */}
                <span className="inline-block text-xs font-body tracking-wider uppercase text-primary mb-2">
                  {brand.category}
                </span>

                {/* Name */}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {brand.description}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-1 text-sm font-body font-medium text-primary group-hover:gap-2 transition-all">
                  Visit Website <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
