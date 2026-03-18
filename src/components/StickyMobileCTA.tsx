import { Phone, MessageCircle, Share2 } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenQR: () => void;
}

const StickyMobileCTA = ({ onOpenQR }: StickyMobileCTAProps) => {
  const whatsappNumber = "919058522279";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-lg">
      <div className="flex items-center justify-around gap-2">
        <a
          href="tel:+919999999999"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-primary text-primary-foreground rounded-xl font-body font-semibold text-sm shadow-sm"
          aria-label="Call"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak!")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[hsl(142_70%_45%)] text-white rounded-xl font-body font-semibold text-sm shadow-sm"
          aria-label="WhatsApp"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <button
          onClick={onOpenQR}
          className="flex items-center justify-center gap-1.5 py-2.5 px-4 border border-border text-foreground rounded-xl font-body text-sm hover:border-primary transition-colors"
          aria-label="Share"
        >
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
