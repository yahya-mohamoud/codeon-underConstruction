const services = [
  {
    title: "Web Design & Development",
    desc: "Bespoke, pixel-perfect websites built for performance, conversion, and lasting impressions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    title: "Digital Strategy",
    desc: "Data-driven strategies that align your digital presence with your core business objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    desc: "Cohesive brand systems and visual identities that communicate your values with clarity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    title: "SEO & Content",
    desc: "Organic growth through strategic SEO, compelling content, and authoritative positioning.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    desc: "Intuitive, high-performance mobile apps for iOS and Android that delight users.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Security & Support",
    desc: "Proactive maintenance, enterprise-grade security monitoring, and 24/7 expert support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#C9A84C] mb-3">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="font-[family-name:var(--font-playfair)] font-bold text-[#0A2540] leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Our Core <span className="text-[#C9A84C]">Services</span>
          </h2>
          <p className="text-[#64748b] text-base">
            We provide a comprehensive suite of professional services tailored to
            grow your business and amplify your brand.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`service-card reveal ${delays[i]} relative bg-[#F7F9FC] border border-[#EEF1F6] rounded-xl p-8 overflow-hidden transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,31,63,0.20)] hover:border-[rgba(201,168,76,0.25)]`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#C9A84C]"
                style={{
                  background: "linear-gradient(135deg, #001F3F, #0d3260)",
                }}
                aria-hidden="true"
              >
                {s.icon}
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#0A2540] mb-2.5">
                {s.title}
              </h3>
              <p className="text-[0.88rem] text-[#64748b] leading-relaxed">
                {s.desc}
              </p>
              <span className="mt-4 inline-block text-[0.68rem] font-bold tracking-widest uppercase text-[#C9A84C] bg-[rgba(201,168,76,0.12)] px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
