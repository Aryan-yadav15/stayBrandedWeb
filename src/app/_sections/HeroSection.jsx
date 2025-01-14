"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Variants for individual letters
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
      },
    },
  };

  // Helper function to wrap each letter
  const renderWaveText = (text, className = "") => (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 ">
      {/* Rotating SVG Background */}
      <motion.div
        className="absolute top-72"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <Image
          src="/Frame 1.svg"
          width={500}
          height={500}
          alt="hero"
          className="relative z-10 blur-2xl"
        />
      </motion.div>

      {/* Foreground Content */}
      <section className="space-y-8 relative z-20">
        <h1 className="text-6xl font-normal leading-tight tracking-tight font-Manrope">
          {renderWaveText("Hi, we're ", "text-gray-900")}
          <span className="font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {renderWaveText("Stay Branded")}{" "}
          </span>
          {renderWaveText("We build")}
          <span className="bg-gray-900 text-white px-6 py-2 rounded-full inline-block">
            {renderWaveText("AI solutions")}
          </span>{" "}
          {renderWaveText("to make businesses")}
          <br />
          <span className="font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {renderWaveText("Faster and")}
          </span>{" "}
          <span className="border-2 border-gray-200 px-6 py-2 rounded-full bg-white inline-block">
            {renderWaveText("Smarter.")}
          </span>
        </h1>

        <div className="flex justify-center items-center">
          <p className="max-w-2xl font-semibold drop-shadow-xl">
            I'm dedicated to crafting websites that bring your ideas to life,
            combining design and development to deliver fast, impactful results.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 shadow-lg bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg transform hover:-translate-y-0.5">
          See what we can do
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
      </section>
    </div>
  );
};

export default HeroSection;
