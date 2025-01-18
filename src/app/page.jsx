import Image from "next/image";
import Navbar from "./_components/Global/Navbar";
import HeroSection from "./_sections/HeroSection";
import About from "./_sections/About";
import PricingCards from "./_components/ui/PriceCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero section container */}
        <div className="sticky top-0 z-10">
          <HeroSection />
        </div>
        {/* Scrolling content container */}
        <div className="relative z-20 bg-white">
          <About />
          {/* Add other sections here */}
          <PricingCards/>
        </div>
      </main>
    </>
  );
}