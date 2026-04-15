"use client";

import { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim())         e.name    = "Please enter your name.";
    if (!isValidEmail(form.email)) e.email   = "Please enter a valid email.";
    if (!form.subject.trim())      e.subject = "Please enter a subject.";
    if (!form.message.trim())      e.message = "Please enter your message.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSuccess(true);
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 placeholder:text-white/30 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.22)]";
  const inputStyle = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
  };
  const inputFocusStyle = { borderColor: "#C9A84C" };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001F3F 0%, #0d3260 100%)" }}
      aria-labelledby="contact-heading"
    >
      {/* Glow blob */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 700, height: 700,
          top: -200, right: -200,
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Info */}
          <div className="reveal">
            <span className="inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#C9A84C] mb-3">
              Get in Touch
            </span>
            <h2
              id="contact-heading"
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Let&apos;s Start a{" "}
              <span className="text-[#C9A84C]">Conversation</span>
            </h2>
            <p className="text-white/65 leading-[1.8] mb-10">
              Have a question or a project in mind? Reach out — our team is
              available and happy to help even while the site is under
              construction.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  label: "Office",
                  value: "123 Innovation Drive, Suite 500\nNew York, NY 10001",
                  icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>,
                  extra: <circle cx="12" cy="10" r="3"/>,
                },
                {
                  label: "Phone",
                  value: "+1 (212) 555-0192",
                  icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
                },
                {
                  label: "Email",
                  value: "hello@codeon.com",
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                      {item.extra}
                    </svg>
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-bold tracking-widest uppercase text-[#C9A84C] mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[0.92rem] text-white/80 whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="reveal reveal-delay-2 rounded-2xl p-10 sm:p-12"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(10px)",
            }}
          >
            {success ? (
              <div className="text-center py-10" role="status" aria-live="polite">
                <div
                  className="w-18 h-18 mx-auto mb-5 rounded-full flex items-center justify-center"
                  style={{
                    width: 72, height: 72,
                    background: "linear-gradient(135deg, #C9A84C, #e8c96d)",
                  }}
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#001F3F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white font-bold mb-2">
                  Message Received!
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will get back
                  to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={`field-${field}`}
                        className="block text-[0.76rem] font-bold tracking-wider uppercase text-white/70 mb-2"
                      >
                        {field === "name" ? "Full Name" : "Email Address"}
                      </label>
                      <input
                        id={`field-${field}`}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        autoComplete={field === "email" ? "email" : "name"}
                        placeholder={field === "name" ? "John Smith" : "john@example.com"}
                        value={form[field]}
                        onChange={handleChange}
                        className={inputBase}
                        style={{
                          ...inputStyle,
                          ...(errors[field] ? { borderColor: "#f87171" } : {}),
                        }}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={(e) =>
                          Object.assign(e.currentTarget.style, {
                            borderColor: errors[field] ? "#f87171" : "rgba(255,255,255,0.15)",
                          })
                        }
                      />
                      {errors[field] && (
                        <p role="alert" className="mt-1.5 text-[0.73rem] text-red-300">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="field-subject" className="block text-[0.76rem] font-bold tracking-wider uppercase text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    id="field-subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputBase}
                    style={{ ...inputStyle, ...(errors.subject ? { borderColor: "#f87171" } : {}) }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) =>
                      Object.assign(e.currentTarget.style, {
                        borderColor: errors.subject ? "#f87171" : "rgba(255,255,255,0.15)",
                      })
                    }
                  />
                  {errors.subject && (
                    <p role="alert" className="mt-1.5 text-[0.73rem] text-red-300">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="field-message" className="block text-[0.76rem] font-bold tracking-wider uppercase text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project or inquiry…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-y`}
                    style={{ ...inputStyle, ...(errors.message ? { borderColor: "#f87171" } : {}) }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) =>
                      Object.assign(e.currentTarget.style, {
                        borderColor: errors.message ? "#f87171" : "rgba(255,255,255,0.15)",
                      })
                    }
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-[0.73rem] text-red-300">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-[#001F3F] text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C 0%, #e8c96d 100%)",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                  }}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
