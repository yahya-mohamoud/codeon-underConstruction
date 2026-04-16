import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import CountdownWrapper from "@/components/CountdownWrapper";
import About            from "@/components/About";
import Services         from "@/components/Services";
import Contact          from "@/components/Contact";
import Footer           from "@/components/Footer";
import ScrollReveal     from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <CountdownWrapper />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
