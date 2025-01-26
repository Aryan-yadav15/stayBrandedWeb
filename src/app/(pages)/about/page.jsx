"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Brain,
  Award,
  Rocket,
  CheckCircle,
  Sparkles,
  Gem,
  Cpu,
} from "lucide-react";
import AboutHeroSection from "./_sections/AboutHeroSection";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import TimelineSection from "./_sections/scrollSection";

const About = () => {
  useSmoothScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const CoreValues = [
    {
      icon: <Cpu className="w-12 h-12 text-lime-400" />, // Replaced Circuitry with Cpu
      title: "Innovation Engine",
      description: "Pioneering solutions through iterative R&D",
      pattern:
        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-400/10 to-transparent",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-teal-400" />,
      title: "Quality Alchemy",
      description: "Transforming ideas into exceptional products",
      pattern:
        "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent",
    },
    {
      icon: <Gem className="w-12 h-12 text-blue-400" />,
      title: "Client-Centric Core",
      description: "Your success metrics drive our operations",
      pattern:
        "bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent",
    },
  ];

  return (
    <div id="about" className="relative overflow-hidden ">
      <AboutHeroSection />

      {/* Animated Background Element */}
      <div className="bg-black z-40">
        <motion.div
          style={{ rotate, scale }}
          className="absolute -top-1/3 -right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-lime-400/5 to-teal-300/5 rounded-full blur-3xl"
        />

        <div className="relative z-20 space-y-28 py-28 container mx-auto px-6">
          {/* Dynamic Value Cards */}
          <section className="grid md:grid-cols-3 gap-8">
            {CoreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative overflow-hidden rounded-2xl border border-lime-400/20 bg-zinc-900/50 backdrop-blur-lg"
              >
                <div
                  className={`absolute -inset-8 opacity-30 ${value.pattern}`}
                />
                <div className="relative p-8 space-y-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-fit mx-auto"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-lime-400 to-teal-300 bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Animated Timeline */}
          <TimelineSection/>

          {/* Interactive Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              { value: "300%", label: "ROI Boost" },
              { value: "10x", label: "Efficiency Gain" },
              { value: "99.9%", label: "Uptime" },
              { value: "150+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                className="p-6 rounded-xl border border-lime-400/20 bg-zinc-900/50 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-lime-400 to-teal-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Service Cards */}
          <section className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-lime-400/20 bg-zinc-900/50 p-8"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-400/10 rounded-full blur-xl" />
              <Rocket className="w-12 h-12 text-lime-400 mb-6" />
              <h3 className="text-2xl font-bold text-lime-400 mb-4">
                Tech Acceleration
              </h3>
              <p className="text-gray-300 mb-6">
                Next-gen solutions leveraging cutting-edge frameworks and cloud
                infrastructure
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI Integration", "IoT Solutions", "Blockchain"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-teal-400/20 bg-zinc-900/50 p-8"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-lime-400/10 rounded-full blur-xl" />
              <CheckCircle className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-2xl font-bold text-teal-400 mb-4">
                Strategic Excellence
              </h3>
              <p className="text-gray-300 mb-6">
                Data-driven decision making powered by real-time analytics and
                market insights
              </p>
              <div className="flex flex-wrap gap-2">
                {["BI Tools", "Market Analysis", "Risk Management"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
