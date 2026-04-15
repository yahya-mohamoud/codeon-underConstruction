import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import Countdown  from "@/components/Countdown";
import About      from "@/components/About";
import Services   from "@/components/Services";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
