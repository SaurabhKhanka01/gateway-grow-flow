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
    <section id="trust" className="py-2.5 sm:py-3 border-y border-border overflow-hidden bg-primary/5">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-[11px] sm:text-xs font-body tracking-[0.12em] uppercase text-primary font-medium">
          {marqueeContent}
        </span>
        <span className="text-[11px] sm:text-xs font-body tracking-[0.12em] uppercase text-primary font-medium">
          {marqueeContent}
        </span>
      </div>
    </section>
  );
};

export default TrustStrip;
