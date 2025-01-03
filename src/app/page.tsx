import AboutTheClub from "@/components/AboutTheClub";
import { FooterTypewriterEffect } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";




export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
   <HeroSection/>
   <AboutTheClub/>
   <FooterTypewriterEffect/>

    </main>
  );
}
