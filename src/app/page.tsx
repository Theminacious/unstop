import AboutTheClub from "@/components/AboutTheClub";
import Events from "@/components/Events";
import { FooterTypewriterEffect } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeamMember from "@/components/TeamMember";




export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased ">
   <HeroSection/>
   <AboutTheClub/>
   <Events/>

<TeamMember/>
   <FooterTypewriterEffect/>
    </main>
  );
}
