import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Download, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "919058522279";

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Yadav;Deepak
FN:Deepak Yadav
ORG:DSY Hospitality Pvt. Ltd.
TITLE:Founder & Director
TEL;TYPE=CELL:+919058522279
EMAIL:contact@dsyhospitality.com
URL:https://dsyhospitality.com
ADR;TYPE=WORK:;;Knowledge Park 3;Greater Noida;Uttar Pradesh;;India
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Deepak_Yadav_DSY.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs sm:text-sm font-body font-medium text-accent uppercase tracking-widest mb-2">Reach Out</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto grid grid-cols-2 gap-3"
        >
          <a href="tel:+919058522279" className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group card-shadow" aria-label="Call">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
              <Phone size={16} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="font-body text-xs text-muted-foreground">Call</p>
              <p className="font-body font-semibold text-foreground text-xs sm:text-sm truncate">+91 90585 22279</p>
            </div>
          </a>

          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak, I'd like to connect.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group card-shadow" aria-label="WhatsApp">
            <div className="w-10 h-10 rounded-lg bg-[hsl(142_70%_45%/0.1)] flex items-center justify-center group-hover:bg-[hsl(142_70%_45%)] transition-colors flex-shrink-0">
              <MessageCircle size={16} className="text-[hsl(142_70%_45%)] group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="font-body text-xs text-muted-foreground">WhatsApp</p>
              <p className="font-body font-semibold text-foreground text-xs sm:text-sm">Chat Now</p>
            </div>
          </a>

          <a href="mailto:contact@dsyhospitality.com" className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group card-shadow" aria-label="Email">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
              <Mail size={16} className="text-accent group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="font-body text-xs text-muted-foreground">Email</p>
              <p className="font-body font-semibold text-foreground text-xs sm:text-sm truncate">contact@dsyhospitality.com</p>
            </div>
          </a>

          <button onClick={downloadVCard} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group text-left card-shadow" aria-label="Save Contact">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
              <Download size={16} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="font-body text-xs text-muted-foreground">Save Contact</p>
              <p className="font-body font-semibold text-foreground text-xs sm:text-sm">Download vCard</p>
            </div>
          </button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
          <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground bg-card px-3 py-1.5 rounded-full border border-border">
            <MapPin size={12} className="text-primary" />
            Greater Noida, India
          </div>
          <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground bg-card px-3 py-1.5 rounded-full border border-border">
            <Clock size={12} className="text-accent" />
            Replies within 2 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
