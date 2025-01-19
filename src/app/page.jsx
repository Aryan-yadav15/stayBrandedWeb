"use client";
import React from "react";
import Navbar from "./_components/Global/Navbar";
import HeroSection from "./_sections/HeroSection";
import About from "./_sections/About";
import PricingCards from "./_components/ui/PriceCard";
import IndustrySection from "./_sections/Industries";
import useSmoothScroll from "./hooks/useSmoothScroll";
import CursorDot from "./hooks/CursorFollow";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <CursorDot />
      <Navbar />
      <main className="relative ">
        <div className="sticky top-0 z-10">
          <HeroSection />
        </div>
        <div className="relative z-20 bg-white">
          <About />
          <div className="relative">
            <PricingCards />
          </div>
          <IndustrySection />
        </div>
      </main>
    </>
  );
}
