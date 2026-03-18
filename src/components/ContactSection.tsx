import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Download, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "919999999999";

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Yadav;Deepak
FN:Deepak Yadav
ORG:DSY Hospitality Pvt. Ltd.
TITLE:Founder & Director
TEL;TYPE=CELL:+919999999999
EMAIL:contact@dsyhospitality.com
URL:https://dsyhospitality.com
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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4"
        >
          <a
            href="tel:+919999999999"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            aria-label="Call"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Call</p>
              <p className="font-body font-medium text-foreground">+91 99999 99999</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak, I'd like to connect.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            aria-label="WhatsApp"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageCircle size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">WhatsApp</p>
              <p className="font-body font-medium text-foreground">Chat Now</p>
            </div>
          </a>

          <a
            href="mailto:contact@dsyhospitality.com"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            aria-label="Email"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Email</p>
              <p className="font-body font-medium text-foreground">contact@dsyhospitality.com</p>
            </div>
          </a>

          <button
            onClick={downloadVCard}
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group text-left"
            aria-label="Save Contact"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Download size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Save Contact</p>
              <p className="font-body font-medium text-foreground">Download vCard</p>
            </div>
          </button>
        </motion.div>

        {/* Extra info */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            New Delhi, India
          </div>
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
            <Clock size={14} className="text-primary" />
            Typically replies within 2 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
