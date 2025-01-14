import React from "react";
import InfiniteCarousel from "../_components/ui/InfiniteCarousel";
import WorkflowAnimation from "../_components/ui/ourWorkFlow";

const About = () => {
  return (
    <div className="h-screen bg-black/90">
      <div className="bg-black/90">
        <InfiniteCarousel />
      </div>
      <div className="space-y-8 px-24">
        <div className="flex items-center space-x-2 text-lime-400">
          <span className="text-sm">{"{01}"}</span>
          <span className="text-sm">— Featured projects</span>
        </div>
        <h1 className="text-6xl text-gray-200 font-medium leading-tight">
          I blend creativity with
          <br />
          technical expertise
        </h1>
        <button className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg transform hover:-translate-y-0.5">
          Become a client
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </button>
        <WorkflowAnimation/>
      </div>
    </div>
  );
};

export default About;
