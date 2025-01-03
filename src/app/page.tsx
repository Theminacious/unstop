import AboutTheClub from "@/components/AboutTheClub";
import Events from "@/components/Events";
import { FooterTypewriterEffect } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeamMember from "@/components/TeamMember";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased ">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutTheClub />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="team">
        <TeamMember />
      </section>
      <section id="footer">
        <FooterTypewriterEffect />
      </section>
    </main>
  );
}