import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import myBestVenueImg from "@/assets/screenshots/my-best-venue.jpg";
import hestiaImg from "@/assets/screenshots/the-hestia-hotels.jpg";
import dsyPgImg from "@/assets/screenshots/dsy-luxury-pg.jpg";
import boldMicImg from "@/assets/screenshots/the-bold-mic.jpg";
import yatraAddaImg from "@/assets/screenshots/yatra-adda.png";
import himTaraImg from "@/assets/screenshots/himtara.jpg";

const brands = [
  {
    name: "My Best Venue",
    category: "Venue Discovery",
    filter: "Hotels",
    url: "https://mybestvenue.com",
    screenshot: myBestVenueImg,
    description: "Mybestvenue is a reliable online venue booking platform that helps users find the perfect space for every occasion across India. With a wide range of options, from affordable venues to premium locations, it ensures convenience, best pricing, and quality service. Whether it's corporate events or celebrations, Mybestvenue makes venue selection easy with trusted hospitality and locations near you.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    name: "The Hestia Hotels Group",
    category: "Hospitality",
    filter: "Hotels",
    url: "https://thehestiahotels.com",
    screenshot: hestiaImg,
    description: "Hestia Hotel stands out as a reliable and growing hospitality brand in Delhi NCR, offering a perfect blend of comfort, affordability, and modern amenities. Located in Knowledge Park 3, Greater Noida, near the Noida Expo Centre with excellent metro connectivity, it ensures seamless travel for guests. With consistent service quality and a strong focus on guest satisfaction, it is ideal for both business and leisure travelers seeking a convenient and value-driven stay.",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    name: "DSY Luxury PG",
    category: "Premium PG Stays",
    filter: "PG",
    url: "https://dsyluxurypg.in",
    screenshot: dsyPgImg,
    description: "DSY Luxury PG stands out as an excellent choice for college students, offering a perfect blend of affordability, comfort, and modern amenities. Located in Knowledge Park 3, it provides convenient metro connectivity along with reliable cab services, including pickup and drop facilities. With its student-friendly environment and well-maintained facilities, it ensures a safe, comfortable, and hassle-free living experience for students.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "The Bold Mic",
    category: "Media & Content",
    filter: "Media",
    url: "https://theboldmic.com",
    screenshot: boldMicImg,
    description: "Bold Mic is an emerging news channel committed to highlighting social issues with clarity, courage, and a bold perspective. It aims to bring real stories to the forefront, spark meaningful conversations, and raise awareness on topics that matter most. With fearless reporting and a strong voice, Bold Mic stands as a platform for truth, impact, and positive change in society.",
    accent: "from-red-500 to-rose-500",
  },
  {
    name: "Yatra Adda",
    category: "Travel & Experiences",
    filter: "Travel",
    url: "https://yatraadda.com",
    screenshot: yatraAddaImg,
    description: "YatraAdda is a growing travel platform designed to make trip planning simple, affordable, and convenient. From booking flights and hotels to complete holiday packages, it offers a seamless and user-friendly experience. With competitive pricing and reliable services, YatraAdda ensures that every journey is smooth, enjoyable, and perfectly tailored to travelers' needs.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    name: "Him Tara",
    category: "Mineral Water",
    filter: "FMCG",
    url: "https://himtara.in",
    screenshot: himTaraImg,
    description: "Himtara is a trusted mineral water brand delivering purity and freshness across India. With premium packaging and a strong focus on quality, it serves both B2B and B2C customers efficiently. Sourced and processed to ensure safe, refreshing hydration, Himtara stands out for reliability, wide distribution, and customer satisfaction, making it an ideal choice for homes, businesses, and organizations alike.",
    accent: "from-sky-500 to-blue-600",
  },
];

const filters = ["All", "Hotels", "Travel", "Media", "PG", "FMCG"];

const EcosystemSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? brands : brands.filter((b) => b.filter === activeFilter);

  return (
    <section id="ecosystem" className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
      <div className="w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block text-sm sm:text-base font-body font-medium text-accent uppercase tracking-widest mb-2">Our Ventures</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            The <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base">
            Six brands. One vision. Explore the DSY Hospitality universe.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 w-full">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-body font-medium transition-all ${activeFilter === f
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Brand cards */}
        <div className="space-y-5 sm:space-y-6 w-full">
          {filtered.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              id={brand.name.toLowerCase().replace(/\s+/g, "-")}
              className="group bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
                {/* Screenshot */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-5`} />
                  <img
                    src={brand.screenshot}
                    alt={`${brand.name} website screenshot`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs sm:text-sm font-body font-semibold text-white bg-gradient-to-r ${brand.accent} shadow-sm`}>
                      {brand.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 line-clamp-4 sm:line-clamp-none">
                      {brand.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <a
                      href={`${brand.url}?utm_source=dsy_portfolio&utm_medium=brand_card&utm_campaign=ecosystem`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-primary/90 transition-all shadow-sm"
                    >
                      Visit Website <ArrowUpRight size={12} />
                    </a>
                    <span className="text-xs sm:text-sm font-body text-muted-foreground flex items-center gap-1">
                      <ExternalLink size={10} /> {brand.url.replace('https://', '')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
