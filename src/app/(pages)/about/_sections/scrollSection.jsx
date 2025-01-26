"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const TimelineSection = () => {
  const containerRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const milestones = [
    {
      year: 2019,
      title: "Breakthrough Milestone",
      description:
        "Revolutionary achievement description that transformed industry standards. This milestone marked a turning point in our journey.",
    },
    {
      year: 2020,
      title: "Global Expansion",
      description:
        "Expanded operations to 10+ countries, establishing a strong international presence.",
    },
    {
      year: 2021,
      title: "Product Innovation",
      description:
        "Launched our flagship product, revolutionizing the market with cutting-edge technology.",
    },
    {
      year: 2022,
      title: "Award-Winning Year",
      description:
        "Received multiple industry awards for innovation and excellence.",
    },
    {
      year: 2023,
      title: "Future-Ready",
      description:
        "Pioneering AI-driven solutions to shape the future of the industry.",
    },
  ];

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth; // Scroll by one container's width
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
      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Timeline Container */}
        <div
          ref={containerRef}
          className="relative flex space-x-8 overflow-x-auto no-scrollbar py-12 pl-6"
          style={{ height: "calc(100vh - 200px)" }}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className="flex-shrink-0 w-96 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative group h-full">
                {/* Year Marker */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-lime-400/20 border-2 border-lime-400/30 flex items-center justify-center group-hover:bg-lime-400/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-lime-400 font-bold text-2xl">
                      {milestone.year}
                    </span>
                  </motion.div>
                </div>

                {/* Timeline Card */}
                <div className="p-8 rounded-2xl bg-zinc-900/80 border-2 border-lime-400/30 backdrop-blur-lg h-full">
                  <h3 className="text-2xl font-bold text-lime-400 mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
              className="  flex items-center space-x-2 backdrop-blur-lg px-4 py-2 z-40 rounded-full bg-zinc-900/50 border border-lime-400/20"
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

      {/* Scroll Indicator */}
    </section>
  );
};

export default TimelineSection;
