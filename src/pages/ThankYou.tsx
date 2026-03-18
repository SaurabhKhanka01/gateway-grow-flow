import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const whatsappNumber = "919999999999";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-success" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">Thank You!</h1>
        <p className="font-body text-muted-foreground mb-8">
          Your inquiry has been received. We'll get back to you within 2 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-gold-hover transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Deepak, I just submitted an inquiry on your portfolio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
