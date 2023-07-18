import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}
