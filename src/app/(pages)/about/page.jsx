"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Rocket,
  Shield,
  Users,
  Sparkles,
  Target,
  CheckCircle,
} from "lucide-react";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import TimelineSection from "./_sections/scrollSection";
import AboutHeroSection from "./_sections/AboutHeroSection";

const About = () => {
  useSmoothScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const CoreValues = [
    {
      icon: <Rocket className="w-12 h-12 text-lime-400" />,
      title: "Growth-Centric Innovation",
      description: "Driving brand growth through creative solutions",
      pattern:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-400/15 to-transparent",
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-400" />,
      title: "Unwavering Trust",
      description: "Building lasting relationships with transparency",
      pattern:
        "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-teal-400/15 via-transparent to-transparent",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Client-Centric Confidence",
      description: "Empowering clients with personalized strategies",
      pattern:
        "bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-400/15 to-transparent",
    },
  ];

  return (
    <div id="about" className="relative overflow-hidden">
      <div className="stick top-0">
        <AboutHeroSection />
      </div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-lime-400 to-teal-300 bg-clip-text text-transparent mb-6">
              Helping You Stay Branded
              <br />
              and Ahead
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            At Stay Branded, we don’t just build brands—we grow them. By
            combining creativity, strategy, and innovation, we craft solutions
            that ensure your business stays unforgettable, unstoppable, and
            unmistakably branded.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/5f16d3f9836eec5a16dc54f5/64de9f5df2c8c3e7d8a7e21d_noise.png')] opacity-10" />
      </motion.section>

      <div className="relative z-20 bg-zinc-900">
        <motion.div
          style={{ rotate, scale }}
          className="absolute -top-1/3 -right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-lime-400/5 to-teal-300/5 rounded-full blur-3xl"
        />

        <div className="relative z-20 space-y-28 py-28 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Core Values Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="relative">
                  <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full" />
                  <div className="h-5 w-5 bg-lime-600 rounded-full" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Our Core Values
                </h2>
              </motion.div>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                The foundation of our commitment to your brand's success
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CoreValues.map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-800/50 backdrop-blur-lg hover:border-lime-400/30 transition-all duration-300"
                >
                  <div
                    className={`absolute -inset-8 opacity-20 ${value.pattern}`}
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
                    <p className="text-gray-300 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="relative">
                  <div className="absolute h-5 w-5 animate-ping bg-teal-400 rounded-full" />
                  <div className="h-5 w-5 bg-teal-600 rounded-full" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Our Journey
                </h2>
              </motion.div>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Milestones that shaped our path to innovation and success
              </motion.p>
            </div>
            <TimelineSection />
          </section>

          {/* Stats Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="relative">
                  <div className="absolute h-5 w-5 animate-ping bg-blue-400 rounded-full" />
                  <div className="h-5 w-5 bg-blue-600 rounded-full" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  By The Numbers
                </h2>
              </motion.div>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Quantifying our impact and commitment to excellence
              </motion.p>
            </div>

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
                { value: "10x", label: "Growth Rate" },
                { value: "99.9%", label: "Client Satisfaction" },
                { value: "150+", label: "Brands Empowered" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  className="p-6 rounded-xl border border-white/10 bg-zinc-800/50 hover:bg-zinc-800/70 transition-all duration-300 text-center"
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
