import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  requirement: z.string().min(1, "Please select a requirement"),
  message: z.string().max(500).optional(),
});

const requirementOptions = [
  "Venue Booking",
  "Travel",
  "PG Stay",
  "Hotel Partnership",
  "Media",
  "Investor Inquiry",
  "Other",
];

const LeadCaptureSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", requirement: "", message: "", _honey: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._honey) return;

    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    navigate("/thank-you");
  };

  return (
    <section id="lead-capture" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-body font-medium text-accent uppercase tracking-widest mb-3">Get Started</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">Tell us what you're looking for. We'll get back within 2 hours.</p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 max-w-5xl mx-auto items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground">Why Partner With Us?</h3>
            {[
              "Multi-brand ecosystem with 50+ properties across India",
              "Dedicated support team — replies within 2 hours",
              "Trusted by 1000+ clients for hospitality excellence",
              "Transparent pricing with no hidden costs",
              "End-to-end solutions from booking to checkout",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-muted-foreground">{item}</p>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 sm:p-8 card-shadow border border-border space-y-5"
            noValidate
          >
            <input type="text" name="_honey" value={form._honey} onChange={(e) => setForm({ ...form, _honey: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div>
              <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-1.5">Full Name *</label>
              <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your full name" />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-body font-medium text-foreground mb-1.5">Phone Number *</label>
              <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="10-digit mobile number" />
              {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="requirement" className="block text-sm font-body font-medium text-foreground mb-1.5">Requirement *</label>
              <select id="requirement" value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                <option value="">Select your requirement</option>
                {requirementOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
              </select>
              {errors.requirement && <p className="text-destructive text-xs mt-1 font-body">{errors.requirement}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-1.5">Message (optional)</label>
              <textarea id="message" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell us more about your needs..." />
            </div>

            <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 shadow-lg shadow-primary/20">
              {submitting ? "Submitting..." : <>Submit Inquiry <Send size={16} /></>}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground font-body text-center">
              <Shield size={12} className="text-accent" />
              Your data is never shared with third parties.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
