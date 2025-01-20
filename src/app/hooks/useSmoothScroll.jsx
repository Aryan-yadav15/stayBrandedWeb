"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Adjust for smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 2), // Alternate easing function
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Debug scroll values
    {
      /**
     lenis.on('scroll', ({ scroll }) => {
      console.log('Scroll position:', scroll);
    });
    */
    }

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
