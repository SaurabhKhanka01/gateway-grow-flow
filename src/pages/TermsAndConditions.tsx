import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => (
  <div className="min-h-screen bg-background py-16 px-6">
    <div className="container mx-auto max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert max-w-none font-body text-muted-foreground space-y-4">
        <p>Last updated: March 2026</p>
        <p>By accessing this website, you agree to these terms and conditions. This portfolio website is operated by DSY Hospitality Pvt. Ltd.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">Use of Website</h2>
        <p>This website is provided for informational purposes and to facilitate business inquiries. You agree not to misuse this platform.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">External Links</h2>
        <p>This website contains links to third-party brand websites. We are not responsible for the content or practices of linked sites.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">Intellectual Property</h2>
        <p>All content, design, and branding on this website are the property of DSY Hospitality Pvt. Ltd.</p>
        <h2 className="font-heading text-xl text-foreground mt-8">Contact</h2>
        <p>For questions, contact us at contact@dsyhospitality.com.</p>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
