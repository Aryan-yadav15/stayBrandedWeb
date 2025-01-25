"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHeroSection = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

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
    <div className=" top-0 z-10 min-h-screen  overflow-hidden">
      <motion.div
        className="absolute flex justify-center items-center w-screen top-72"
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
          className="relative z-0 blur-2xl"
        />
      </motion.div>
      <div className="relative z-0 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-white">
        <motion.section
          className="space-y-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl text-black font-normal leading-relaxed tracking-tight font-Manrope sm:text-5xl md:text-6xl">
            {renderWaveText("Exploring ", "text-black")}
            <span className="font-semibold bg-gradient-to-r from-lime-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              {renderWaveText("Our Story")}
            </span>
            <br className="hidden sm:block" />
            {renderWaveText("Crafting ")}
            <motion.span
              className="bg-lime-400 text-black px-6 py-2 rounded-full inline-block shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {renderWaveText("Digital Experiences")}
            </motion.span>
            <br className="hidden sm:block" />
            {renderWaveText("with ")}
            <motion.span
              className="border-2 border-lime-400 px-6 py-2 rounded-full bg-transparent inline-block shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {renderWaveText("Passion")}
            </motion.span>
          </h1>

          <motion.p
            className="mx-auto max-w-2xl text-lg font-medium text-gray-800 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We transform complex challenges into elegant solutions, blending
            creativity, technology, and strategic thinking to drive meaningful
            digital transformation.
          </motion.p>

          <motion.button
            className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-lg font-medium text-black shadow-lg transition-all hover:bg-lime-500 hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
            <motion.svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutHeroSection;
