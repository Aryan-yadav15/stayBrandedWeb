import React from "react";
import InfiniteCarousel from "../_components/ui/InfiniteCarousel";
import WorkflowAnimation from "../_components/ui/ourWorkFlow";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-100">
      {/* Carousel Section */}
      <div className="relative">
        <InfiniteCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 py-16 space-y-12">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full"></div>
            <div className="h-5 w-5 bg-lime-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-lime-400">{"{01} —"}</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-lime-200">
              About Us
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-300">
          Blending Creativity
          <br />
          With Technical Expertise
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
          At the core of everything we do is a passion for innovation. Our team
          brings bold ideas to life by combining visionary design with
          cutting-edge technology, delivering meaningful solutions tailored to
          your unique needs.
        </p>

        {/* Call-to-Action Button */}
        <div>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-teal-400 hover:from-lime-300 hover:to-teal-300 text-black px-10 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all hover:shadow-2xl hover:-translate-y-1">
            Become a client
            <svg
              className="w-6 h-6 transition-transform transform group-hover:translate-x-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Workflow Animation */}
        <div className="relative pt-12">
          <WorkflowAnimation />
        </div>
      </div>
    </div>
  );
};

export default About;
