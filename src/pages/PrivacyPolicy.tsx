import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background py-16 px-6">
    <div className="container mx-auto max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none font-body text-muted-foreground space-y-4">
        <p>Last updated: March 2026</p>
        <p>DSY Hospitality Pvt. Ltd. ("we", "us") is committed to protecting your privacy in compliance with the Digital Personal Data Protection Act, 2023 (India).</p>
        <h2 className="font-heading text-xl text-foreground mt-8">Information We Collect</h2>
        <p>We collect only the information you voluntarily provide: name, phone number, requirement type, and optional message through our lead form.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">How We Use Your Information</h2>
        <p>Your data is used solely to respond to your inquiry and provide relevant services. We never sell or share your personal data with third parties.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">Contact</h2>
        <p>For privacy concerns, contact us at contact@dsyhospitality.com.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
