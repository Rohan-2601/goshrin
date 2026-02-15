import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BrandStore from "@/components/BrandStore";
import Riser from "@/components/Riser";
import CreatorClub from "@/components/CreatorClub";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
     
      <Hero />
      <Features />
      <BrandStore />
       <Comparison />
      <Riser />
      <CreatorClub />
     
      <CTA />
      <Footer />
      
    </main>
  );
}
