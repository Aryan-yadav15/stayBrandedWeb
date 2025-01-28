"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const TimelineSection = () => {
  const containerRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const milestones = [
    {
      year: 2020,
      title: "Stay Branded Launch",
      description:
        "Launched Stay Branded, focusing on helping businesses build strong digital identities.",
    },
    {
      year: 2021,
      title: "Service Expansion",
      description:
        "Expanded our services to include personalized branding strategies, gaining trust from key clients.",
    },
    {
      year: 2022,
      title: "Team Growth",
      description:
        "Grew our team, enhancing creativity and innovation to deliver tailored marketing solutions.",
    },
    {
      year: 2023,
      title: "Data-Driven Strategies",
      description:
        "Developed data-driven strategies, further optimizing branding and growth for clients.",
    },
    {
      year: 2024,
      title: "Scaling Businesses",
      description:
        "Focused on scaling businesses, achieving remarkable growth for clients in diverse industries.",
    },
    {
      year: 2025,
      title: "Website Rebranding",
      description:
        "Launched and rebranded our website to reflect our evolving vision and capabilities.",
    },
  ];

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth / 2; // Scroll by half container's width
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    // Update the scroll hint visibility
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 50;
    setShowScrollHint(!atEnd);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="relative flex space-x-8 overflow-x-auto no-scrollbar py-12 pl-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="flex-shrink-0 w-80 px-4" // Fixed width for consistency
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative group h-full">
              {/* Year Marker */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className="w-16 h-16 rounded-full bg-lime-400/20 border-2 border-lime-400/30 flex items-center justify-center group-hover:bg-lime-400/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-lime-400 font-bold text-xl">
                    {milestone.year}
                  </span>
                </motion.div>
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border-2 border-lime-400/30 backdrop-blur-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-lime-400 mb-4">
                  {milestone.title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons Below Timeline */}
      <div className="flex justify-center items-center space-x-8 mt-8">
        <button
          onClick={() => handleScroll("left")}
          className="bg-zinc-900/80 p-2 rounded-full shadow-lg border border-lime-400/30 hover:bg-lime-400/30 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-lime-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {showScrollHint && (
          <motion.div
            className="flex items-center space-x-2 backdrop-blur-lg px-4 py-2 z-40 rounded-full bg-zinc-900/50 border border-lime-400/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-sm text-lime-400">
              Click arrows to navigate
            </span>
          </motion.div>
        )}
        <button
          onClick={() => handleScroll("right")}
          className="bg-zinc-900/80 p-2 rounded-full shadow-lg border border-lime-400/30 hover:bg-lime-400/30 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-lime-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TimelineSection;