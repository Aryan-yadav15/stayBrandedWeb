"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./_components/Global/Navbar";
import HeroSection from "./_sections/HeroSection";
import About from "./_sections/About";
import PricingCards from "./_components/ui/PriceCard";
import IndustrySection from "./_sections/Industries";
import useSmoothScroll from "./hooks/useSmoothScroll";
import CursorDot from "./hooks/CursorFollow";
import OurTestimonail from "./_sections/OurTestimonail";
import MobileWorkflow from "./_components/ui/mobileWorkflow";
import WorkflowAnimation from "./_components/ui/ourWorkFlow";

export default function Home() {
  useSmoothScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <CursorDot />
      <main className="relative">
        <div className="sticky top-0 z-10">
          <HeroSection />
        </div>
        <div className="relative z-20 bg-white">
          <About />
          {/* Workflow Section */}
          <div className="relative bg-black">
            <div className=" lg:hidden pb-10">
              <MobileWorkflow />{" "}
            </div>
          </div>
          <div className="relative">
            <PricingCards />
          </div>
          <IndustrySection />
          <OurTestimonail />
        </div>
      </main>
    </>
  );
}
