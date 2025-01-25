import React from "react";
import ServiceHeroSection from "./_sections/heroService";
import InfiniteCarousel from "@/app/_components/ui/InfiniteCarousel";
import BentoSection from "./_sections/BentoSection";
import BentoBox from "./_sections/BentoSection";
import MarketingSections from "./_sections/MarketingSections";
import AppDevSEO from "./_sections/AppdevSeo";

const page = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <ServiceHeroSection />
      </div>
      <div className="relative z-20 bg-black ">
        <InfiniteCarousel />
        <BentoBox/>
        <MarketingSections/>
        <AppDevSEO/>
      </div>
    </div>
  );
};

export default page;
