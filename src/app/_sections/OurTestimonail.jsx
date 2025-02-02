import React from "react";
import TestimonialSection from "../_components/ui/testimonials";

const OurTestimonail = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-black/90 p-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center mr-2">
            <div className="absolute h-4 w-4 rounded-full animate-ping bg-red-500"></div>
            <div className="absolute h-4 w-4 rounded-full bg-red-500"></div>
          </div>
          <div className="flex items-center space-x-2 text-lime-400">
            <span className="text-sm">{"{04} —"}</span>
            <span className="text-sm font-bold text-white">Testimonials</span>
          </div>
        </div>
        <div className="flex mt-4 mb-4">
          <p className="text-6xl text-left text-white max-w-full font-semibold">
            What Our{" "}
            <span className="text-lime-400 font-cursive">Clients </span>Say
          </p>
        </div>
        <div className="flex mb-20">
          <p className="text-md text-left text-lime-300 max-w-full">
            Hear from our clients about their experiences and successes with our
            services.
          </p>
        </div>
        <TestimonialSection />
      </div>
    </div>
  );
};

export default OurTestimonail;
