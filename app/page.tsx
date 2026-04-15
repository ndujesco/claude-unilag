import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HackathonCountdown from "@/components/HackathonCountdown";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <AboutSection />
      <HackathonCountdown />
      <CommunitySection />
      <Footer />
    </main>
  );
}
