import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  { name: "My Best Venue", url: "https://mybestvenue.com" },
  { name: "Yatra Adda", url: "https://yatraadda.com" },
  { name: "The Hestia Hotels Group", url: "https://thehestiahotels.com" },
  { name: "The Bold Mic", url: "https://theboldmic.com" },
  { name: "DSY Luxury PG", url: "https://dsyluxurypg.in" },
  { name: "Him Tara", url: "https://himtara.in" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 pb-28 sm:pb-12 bg-card">
      <div className="container mx-auto px-6">
        {/* Brand header */}
        <div className="text-center mb-8">
          <h3 className="font-heading text-xl font-bold text-foreground mb-1">DSY Hospitality</h3>
          <p className="font-body text-sm text-muted-foreground">Building Experiences Across India</p>
        </div>

        {/* Brands */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-3xl mx-auto">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={`${brand.url}?utm_source=dsy_portfolio&utm_medium=footer`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {brand.name} <ExternalLink size={10} />
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-border mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2026 DSY Hospitality Pvt. Ltd.</span>
            <span className="text-primary">•</span>
            <span>Made in India 🇮🇳</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
