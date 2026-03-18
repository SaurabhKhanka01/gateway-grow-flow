import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Shield } from "lucide-react";
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

    // Honeypot check
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

    // Simulate submission (replace with actual API)
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    navigate("/thank-you");
  };

  return (
    <section id="lead-capture" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="font-body text-muted-foreground">Tell us what you're looking for. We'll get back within 2 hours.</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-5"
          noValidate
        >
          {/* Honeypot */}
          <input
            type="text"
            name="_honey"
            value={form._honey}
            onChange={(e) => setForm({ ...form, _honey: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-body text-muted-foreground mb-1">Full Name *</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-body text-muted-foreground mb-1">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="10-digit mobile number"
            />
            {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
          </div>

          {/* Requirement */}
          <div>
            <label htmlFor="requirement" className="block text-sm font-body text-muted-foreground mb-1">Requirement *</label>
            <select
              id="requirement"
              value={form.requirement}
              onChange={(e) => setForm({ ...form, requirement: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            >
              <option value="">Select your requirement</option>
              {requirementOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.requirement && <p className="text-destructive text-xs mt-1 font-body">{errors.requirement}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-body text-muted-foreground mb-1">Message (optional)</label>
            <textarea
              id="message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
              placeholder="Tell us more about your needs..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-gold-hover transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : <>Submit Inquiry <Send size={16} /></>}
          </button>

          {/* Privacy notice */}
          <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground font-body text-center">
            <Shield size={12} className="text-primary" />
            Your data is never shared with third parties.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
