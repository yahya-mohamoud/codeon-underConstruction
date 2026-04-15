import Link from "next/link";

const quickLinks = ["Home", "About", "Services", "Contact"];
const contactInfo = [
  { label: "hello@codeon.com", href: "mailto:hello@codeon.com" },
  { label: "+1 (212) 555-0192",  href: "tel:+12125550192" },
  { label: "123 Innovation Drive, NY", href: "#" },
  { label: "Mon–Fri: 9am – 6pm EST",   href: "#" },
];

const socials = [
  {
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#000e1f] pt-16 pb-0 text-white/60" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.07]">

          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-2.5 mb-4" aria-label="Codeon Home">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#e8c96d] flex items-center justify-center font-black text-[#001F3F] text-lg">
                C
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Code<span className="text-[#C9A84C]">on</span>
              </span>
            </Link>
            <p className="text-[0.87rem] leading-[1.8] max-w-xs mb-5">
              A forward-thinking company building exceptional digital experiences.
              Our new website is coming soon — follow us to stay updated.
            </p>
            <div className="flex gap-2.5" aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-white/70 transition-all duration-200 hover:text-white hover:bg-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.4)]"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#C9A84C] mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href={`#${l.toLowerCase()}`}
                    className="text-[0.87rem] text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#C9A84C] mb-5">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-2.5" role="list">
              {contactInfo.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-[0.87rem] text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-5 text-[0.78rem]">
          <p>
            &copy; {year}{" "}
            <a href="#" className="text-[#C9A84C] font-semibold hover:underline">
              Codeon
            </a>
            . All rights reserved.
          </p>
          <p>
            Designed with ♥ — Site launching{" "}
            <a href="#" className="text-[#C9A84C] font-semibold hover:underline">
              September 2026
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
