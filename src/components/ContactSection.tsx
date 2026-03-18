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
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-body font-medium text-accent uppercase tracking-widest mb-3">Reach Out</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4"
        >
          <a href="tel:+919058522279" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group card-shadow" aria-label="Call">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Phone size={20} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Call</p>
              <p className="font-body font-semibold text-foreground">+91 90585 22279</p>
            </div>
          </a>

          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak, I'd like to connect.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group card-shadow" aria-label="WhatsApp">
            <div className="w-12 h-12 rounded-xl bg-[hsl(142_70%_45%/0.1)] flex items-center justify-center group-hover:bg-[hsl(142_70%_45%)] transition-colors">
              <MessageCircle size={20} className="text-[hsl(142_70%_45%)] group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">WhatsApp</p>
              <p className="font-body font-semibold text-foreground">Chat Now</p>
            </div>
          </a>

          <a href="mailto:contact@dsyhospitality.com" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group card-shadow" aria-label="Email">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Mail size={20} className="text-accent group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Email</p>
              <p className="font-body font-semibold text-foreground">contact@dsyhospitality.com</p>
            </div>
          </a>

          <button onClick={downloadVCard} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group text-left card-shadow" aria-label="Save Contact">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Download size={20} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Save Contact</p>
              <p className="font-body font-semibold text-foreground">Download vCard</p>
            </div>
          </button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <MapPin size={14} className="text-primary" />
            Greater Noida, India
          </div>
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <Clock size={14} className="text-accent" />
            Typically replies within 2 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
