"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const phrases = [
  "Estimated Launch: September 2026",
  "A brand new experience awaits…",
  "Almost ready. Stay tuned!",
  "We can't wait to show you.",
];

function useTypingEffect() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let delay = isDeleting ? 40 : 70;

    if (!isDeleting && charIdx === current.length) {
      delay = 2400;
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setCharIdx((c) => (isDeleting ? c - 1 : c + 1));
      setText(current.slice(0, isDeleting ? charIdx - 1 : charIdx + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, isDeleting, phraseIdx]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #001F3F 0%, #0d3260 50%, #0e3d6e 100%)",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Grid overlay */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          top: -100, right: -150,
          background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          bottom: -80, left: -100,
          background: "radial-gradient(circle, rgba(26,74,122,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 pb-20">
        {/* Badge */}
        <div
          className="animate-fade-down inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 text-[#e8c96d] text-xs font-bold tracking-widest uppercase"
          style={{
            background: "rgba(201,168,76,0.15)",
            border: "1px solid rgba(201,168,76,0.35)",
          }}
        >
          <span className="pulse-dot w-2 h-2 rounded-full bg-[#C9A84C]" aria-hidden="true" />
          🚀&nbsp; Launching Soon
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="animate-fade-up animate-delay-200 font-[family-name:var(--font-playfair)] text-white font-bold leading-[1.15] mb-6"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}
        >
          We&apos;re Building<br />
          <span className="text-[#C9A84C]">Something Great</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up animate-delay-350 text-white/70 max-w-lg mx-auto mb-4 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          Our website is currently under construction. We&apos;ll be back online shortly with an amazing new experience crafted just for you.
        </p>

        {/* Typing line */}
        <div className="animate-fade-up animate-delay-500 flex items-center justify-center gap-2 text-[#e8c96d] text-sm font-medium mb-12 min-h-[24px]">
          <span className="typing-cursor whitespace-nowrap">{typedText}</span>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up animate-delay-650 flex flex-wrap gap-4 justify-center">
          <Link
            href="#contact"
            id="hero-notify-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-[#001F3F] text-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #e8c96d 100%)",
              boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            Get Notified
          </Link>
          <Link
            href="#about"
            id="hero-learn-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white text-sm border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-up animate-delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 text-[0.65rem] tracking-widest uppercase"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <svg className="bounce-hint" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}
