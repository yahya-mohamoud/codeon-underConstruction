"use client";

const features = [
  "Completely redesigned, modern user experience",
  "Full portfolio and case studies showcase",
  "Streamlined client portal and service booking",
  "Fully optimized for speed, accessibility & mobile",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F7F9FC]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Card */}
          <div className="reveal">
            <div
              className="relative bg-white rounded-2xl overflow-hidden text-center px-10 py-12"
              style={{
                boxShadow: "0 20px 60px rgba(0,31,63,0.20)",
                borderTop: "4px solid #C9A84C",
              }}
            >
              {/* Corner glow */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(201,168,76,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Spinning gear */}
              <div className="relative w-20 h-20 mx-auto mb-6" aria-hidden="true">
                <div
                  className="spin-gear w-20 h-20 rounded-full border-2 border-[#C9A84C] flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                  </svg>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #e8c96d)",
                  }}
                />
              </div>

              <h3
                className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#0A2540] mb-3"
              >
                Under Construction
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                Our talented team is hard at work crafting a premium digital
                experience that reflects the quality and professionalism of our
                services.
              </p>
              <span
                className="inline-block bg-[#001F3F] text-[#C9A84C] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full"
              >
                ✦ Launching September 2026
              </span>
            </div>
          </div>

          {/* Text block */}
          <div className="reveal reveal-delay-2">
            <span className="inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#C9A84C] mb-3">
              About Us
            </span>
            <h2
              id="about-heading"
              className="font-[family-name:var(--font-playfair)] font-bold text-[#0A2540] leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              We&apos;re On Our<br />
              <span className="text-[#C9A84C]">Way Back to You</span>
            </h2>
            <p className="text-[#64748b] leading-[1.8] mb-4">
              We are a forward-thinking company committed to delivering
              excellence. While we put the finishing touches on our new website,
              rest assured that our team continues to operate at full capacity
              serving our clients with dedication and passion.
            </p>
            <p className="text-[#64748b] leading-[1.8] mb-7">
              The new website will showcase our full range of services, client
              success stories, and the innovative solutions we bring to every
              project. We&apos;ve redesigned everything from the ground up — and
              we can&apos;t wait for you to see it.
            </p>

            <ul className="flex flex-col gap-3.5" aria-label="What to expect">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.93rem] font-medium text-[#0A2540]">
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #e8c96d)",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#001F3F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
