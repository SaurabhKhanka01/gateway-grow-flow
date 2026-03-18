const items = [
  "Multi-brand Ecosystem",
  "Pan India Presence",
  "6 Active Brands",
  "50+ Properties",
  "10+ Cities",
  "Trusted by 1000+ Clients",
  "4+ Years of Excellence",
];

const TrustStrip = () => {
  const marqueeContent = items.map((item) => `${item}  ·  `).join("");

  return (
    <section id="trust" className="py-4 border-y border-border overflow-hidden bg-secondary/50">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-sm font-body tracking-[0.2em] uppercase text-primary">
          {marqueeContent}
        </span>
        <span className="text-sm font-body tracking-[0.2em] uppercase text-primary">
          {marqueeContent}
        </span>
      </div>
    </section>
  );
};

export default TrustStrip;
