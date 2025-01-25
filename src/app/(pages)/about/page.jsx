"use client"
import React from "react"
import { motion } from "framer-motion"
import { Target, Brain, Award, Rocket, CheckCircle } from "lucide-react"
import AboutHeroSection from "./_sections/AboutHeroSection"

const About = () => {
  const CoreValues = [
    {
      icon: <Target className="w-12 h-12 text-lime-400" />,
      title: "Innovation",
      description: "Continuously pushing technological boundaries",
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-400" />,
      title: "Collaboration",
      description: "Bringing diverse perspectives together",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Excellence",
      description: "Delivering exceptional results consistently",
    },
  ]

  const achievements = [
    { number: "500+", text: "Projects Completed" },
    { number: "50+", text: "Awards Won" },
    { number: "100%", text: "Client Satisfaction" },
    { number: "24/7", text: "Support" },
  ]

  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <AboutHeroSection />
      </div>
      <div className="relative z-20 bg-black">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-100">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-300">
                Crafting Digital Experiences
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                We are a passionate team of designers, developers, and strategists dedicated to transforming innovative
                ideas into remarkable digital solutions.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative w-full h-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-teal-300/20 rounded-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Experience"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transform -rotate-3"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values Section */}
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-300">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {CoreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-zinc-800/50 p-8 rounded-xl text-center hover:shadow-xl hover:shadow-lime-400/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-lime-400">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="container mx-auto px-6 py-24 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-300">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-300">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zinc-800/30 p-8 rounded-xl"
              >
                <Rocket className="w-12 h-12 text-lime-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-lime-400">Web Development</h3>
                <p className="text-gray-300">
                  We create stunning, responsive websites that engage your audience and drive results. Our expert team
                  uses cutting-edge technologies to build scalable and performant web applications.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-zinc-800/30 p-8 rounded-xl"
              >
                <CheckCircle className="w-12 h-12 text-teal-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Digital Strategy</h3>
                <p className="text-gray-300">
                  Our strategic approach helps businesses navigate the digital landscape, identifying opportunities for
                  growth and innovation. We develop comprehensive plans to achieve your digital goals and stay ahead of
                  the competition.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

