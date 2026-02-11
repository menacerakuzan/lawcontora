import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustRibbon from "./components/TrustRibbon";
import StatsImpact from "./components/StatsImpact";
import PracticeAreaSystem from "./components/PracticeAreaSystem";
import Philosophy from "./components/Philosophy";
import EditorialHub from "./components/EditorialHub";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <TrustRibbon />
        <StatsImpact />
        <PracticeAreaSystem />
        <Philosophy />
        <EditorialHub />
        <ContactSection />
      </main>
      <Footer />
    </PageTransition>
  );
}

