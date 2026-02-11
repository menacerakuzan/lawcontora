import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Philosophy from "./components/Philosophy";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <CoreValues />
      <Philosophy />
      <ContactSection />
      <Footer />
    </>
  );
}
