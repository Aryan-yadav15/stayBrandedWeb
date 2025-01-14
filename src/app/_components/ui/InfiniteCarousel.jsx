"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const InfiniteCarousel = () => {
  const items = [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "Cloud Solutions",
    "AI Integration",
    "Digital Marketing"
  ];

  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef(null);

  // Create a longer list for smoother looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden my-8 pb-8 pt-4">
      {/* Gradient overlay for left fade */}
      <div className="absolute left-0 top-0 h-full w-48 z-10 bg-gradient-to-r   via-black/90 from-black/90  to-transparent" />
      
      {/* Gradient overlay for right fade */}
      <div className="absolute right-0 top-0 h-full w-48 z-10 bg-gradient-to-l   via-black/90 from-black/90  to-transparent" />
      
      {/* Moving text container */}
      <motion.div 
        ref={containerRef}
        className="flex gap-20 whitespace-nowrap"
        animate={{
          x: [-contentWidth / 4, -contentWidth / 2], // Only animate through half the content
        }}
        transition={{
          duration: 50, // Increased duration for smoother movement
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index}
            className="flex flex-row items-center px-8 text-gray-100 gap-10 text-5xl font-medium"
          >
            {item}
            <Image 
              src="/cross.svg" 
              width={100} 
              height={100} 
              alt="cross"
              className="pt-4"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;