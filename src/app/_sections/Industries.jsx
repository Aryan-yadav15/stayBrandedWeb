"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Tag, Search, Monitor, Code } from "lucide-react";
import { tabContent } from "../lib/industries";

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState("marketing");

  const tabs = [
    { id: "marketing", icon: <Briefcase className="w-6 h-6" />, label: "Marketing" },
    { id: "branding", icon: <Tag className="w-6 h-6" />, label: "Branding" },
    { id: "seo", icon: <Search className="w-6 h-6" />, label: "SEO" },
    { id: "ads", icon: <Monitor className="w-6 h-6" />, label: "Advertise" },
    { id: "development", icon: <Code className="w-6 h-6" />, label: "Development" },
  ];

  return (
    <div className="w-full bg-zinc-900 py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center mr-2">
            <div className="absolute h-4 w-4 rounded-full animate-ping bg-red-500" />
            <div className="absolute h-4 w-4 rounded-full bg-red-500" />
          </div>
          <div className="flex items-center space-x-2 text-lime-400">
            <span className="text-sm">{"{03} —"}</span>
            <span className="text-sm font-bold text-white">Our Work</span>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <h2 className="text-4xl md:text-5xl xl:text-6xl text-left text-white font-semibold max-w-prose">
            Industries we{" "}
            <span className="text-lime-400 font-cursive">Collaborate</span> with
          </h2>
        </div>

        <div className="mb-8 md:mb-20">
          <p className="text-sm md:text-base text-left text-lime-300 max-w-prose">
            Discover the transformative journeys of businesses across diverse
            sectors that have harnessed the power of AI with our expertise.
          </p>
        </div>

        {/* Navigation Tabs - Mobile Scrollable */}
        <div className="overflow-x-auto pb-4 md:pb-0 md:overflow-visible">
          <div className="flex md:justify-center space-x-4 md:space-x-12 w-max md:w-full mb-8 md:mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-2 group min-w-[100px] ${
                  activeTab === tab.id ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
              >
                <div
                  className={`p-3 md:p-4 rounded-lg ${
                    activeTab === tab.id ? "bg-lime-400" : "bg-lime-600"
                  }`}
                >
                  {tab.icon}
                </div>
                <span className="text-xs md:text-sm text-white font-medium text-center">
                  {tab.label}
                </span>
                <div className="relative w-full">
                  <div className="absolute top-0 left-0 h-0.5 w-full bg-lime-600" />
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute top-0 left-0 h-1 w-full bg-lime-400"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {tabContent[activeTab]?.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800 rounded-lg p-4 md:p-6 border border-lime-400/40 hover:border-lime-400/60 transition-colors"
            >
              <div className="p-2 bg-white inline-block rounded-lg">
                <img src={card.logo} alt={card.title} className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-lime-400 font-bold mb-2 md:mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">{card.description}</p>
              <div className="border-t border-zinc-700 pt-4 md:pt-6">
                <h4 className="text-lime-400 font-semibold mb-2 md:mb-4">What's included?</h4>
                <ul className="space-y-2 md:space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start text-xs md:text-sm text-gray-400">
                      <span className="text-lime-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustrySection;