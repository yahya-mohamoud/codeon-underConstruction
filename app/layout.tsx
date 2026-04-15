import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codeon | Coming Soon",
  description:
    "Our website is currently under construction. We're working hard to bring you an amazing new experience. Launching September 2026.",
  keywords: ["coming soon", "under construction", "launching soon", "Codeon"],
  authors: [{ name: "Codeon" }],
  openGraph: {
    title: "Codeon — Coming Soon",
    description: "We're building something great. Our new website launches September 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
