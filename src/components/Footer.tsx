import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import myBestVenueImg from "@/assets/screenshots/my-best-venue-logo.jpg";
import yatraAddaImg from "@/assets/screenshots/yatra-adda.png";
import hestiaImg from "@/assets/screenshots/hestia-logo.jpg";
import boldMicImg from "@/assets/screenshots/bold-mic-logo.jpg";
import dsyPgImg from "@/assets/screenshots/dsy-pg-logo.jpg";
import himTaraImg from "@/assets/screenshots/himtara-logo.jpg";

const brands = [
  { name: "My Best Venue", url: "https://mybestvenue.com", logo: myBestVenueImg },
  { name: "Yatra Adda", url: "https://yatraadda.com", logo: yatraAddaImg },
  { name: "The Hestia Hotels Group", url: "https://thehestiahotels.com", logo: hestiaImg },
  { name: "The Bold Mic", url: "https://theboldmic.com", logo: boldMicImg },
  { name: "DSY Luxury PG", url: "https://dsyluxurypg.in", logo: dsyPgImg },
  { name: "Him Tara", url: "https://himtara.in", logo: himTaraImg },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 pb-24 sm:pb-8 bg-card">
      <div className="container mx-auto px-0">
        <div className="text-center mb-5">
          <h3 className="font-heading text-lg font-bold text-foreground mb-0.5">DSY Hospitality</h3>
          <p className="font-body text-xs text-muted-foreground">Building Experiences Across India</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5 justify-items-center">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={`${brand.url}?utm_source=dsy_portfolio&utm_medium=footer`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
            >
              <img src={brand.logo} alt={brand.name} className="w-6 h-6 rounded object-cover object-center shrink-0" />
              {brand.name} <ExternalLink size={9} />
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-border mb-5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2026 DSY Hospitality Pvt. Ltd.</span>
            <span className="text-primary">•</span>
            <span>Made in India 🇮🇳</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
