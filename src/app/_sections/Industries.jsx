"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Tag, Search, Monitor, Code } from "lucide-react";
import { tabContent } from "../lib/industries";

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState("marketing");

  const tabs = [
    {
      id: "marketing",
      icon: <Briefcase className="w-6 h-6" />,
      label: "Marketing",
    },
    {
      id: "branding",
      icon: <Tag className="w-6 h-6" />,
      label: "Branding",
    },
    {
      id: "seo",
      icon: <Search className="w-6 h-6" />,
      label: "SEO",
    },
    {
      id: "ads",
      icon: <Monitor className="w-6 h-6" />,
      label: "Advertise",
    },
    {
      id: "development",
      icon: <Code className="w-6 h-6" />,
      label: "Development",
    },
  ];

  return (
    <div className="w-full bg-zinc-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center space-x-2 text-lime-400">
          <span className="text-sm">{"{04}"}</span>
          <span className="text-sm">— Our Work</span>
        </div>
        <div className="flex mt-4 mb-4">
          <p className="text-6xl text-left text-white w-[1000px] font-semibold">
            Industries we{" "}
            <span className="text-lime-400 font-cursive">Collaborate</span> with
          </p>
        </div>
        <div className="flex mb-20">
          <p className="text-md text-left text-lime-300 w-[800px]">
            Discover the transformative journeys of businesses across diverse
            sectors that have harnessed the power of AI with our expertise. We
            partner with a wide range of industries to drive innovation and
            success.
          </p>
        </div>
        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-12 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center space-y-2 group ${
                activeTab === tab.id
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <div
                className={`p-4 rounded-lg ${
                  activeTab === tab.id ? "bg-lime-400" : "bg-lime-600"
                }`}
              >
                {tab.icon}
              </div>
              <span className="text-sm text-white font-medium">
                {tab.label}
              </span>

              {/* Background line for the entire path */}
              <div className="relative w-full">
                <div className="absolute top-0 left-0 h-0.5 w-full bg-lime-600"></div>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-0 h-1 w-full bg-lime-400"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tabContent[activeTab]?.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800 rounded-lg p-8 border border-lime-400/40 "
            >
              <img
                src={card.logo}
                alt={card.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-4xl text-lime-400 font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{card.description}</p>
              <div className="border-t border-zinc-700 pt-6">
                <h4 className="text-lime-400 font-semibold mb-4">
                  What's included?
                </h4>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-400"
                    >
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
