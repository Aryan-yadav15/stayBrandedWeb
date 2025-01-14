"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const workflowSteps = [
  {
    title: "Identify Tasks",
    subtitle: "Workflows to identify tasks AI can automate and optimize.",
    content: {
      type: "bug-list",
      items: [
        { id: 1, title: "Voice Assistant Bugs", status: "Operational" },
        { id: 2, title: "Voice Assistant Bugs", status: "Operational" },
        { id: 3, title: "Voice Assistant Bugs", status: "Operational" },
        { id: 4, title: "Voice Assistant Bugs", status: "Operational" },
        { id: 5, title: "Voice Assistant Bugs", status: "Operational" },
      ],
    },
  },
  {
    title: "Develop & Integrate",
    subtitle: "Next, we develop and integrate AI solutions into your workflows.",
    content: {
      type: "integration",
      items: [
        { id: 1, title: "AI Integration Progress", status: "In Progress" },
        { id: 2, title: "System Integration", status: "Pending" },
        { id: 3, title: "Workflow Implementation", status: "Complete" },
      ],
    },
  },
  {
    title: "Refine & Improve",
    subtitle: "Then, we continuously refine and improve your AI solutions.",
    content: {
      type: "improvements",
      items: [
        { id: 1, title: "Performance Optimization", status: "Active" },
        { id: 2, title: "Feature Enhancement", status: "Scheduled" },
        { id: 3, title: "Bug Fixes", status: "Ongoing" },
      ],
    },
  },
];

const WorkflowStep = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative mb-40"
    >
      <div className="flex gap-8 items-start max-w-6xl mx-auto">
        {/* Left Side - Step Info */}
        <div className="w-1/2">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            animate={isInView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
            <p className="text-gray-400">{step.subtitle}</p>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="space-y-4"
          >
            {step.content.items.map((item, itemIndex) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                className="bg-gray-700 p-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200">{item.title}</span>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {item.status}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkflowAnimation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-16"
        >
          Our <span className="text-yellow-400 font-cursive">Workflow</span>
        </motion.h1>

        <div className="space-y-32">
          {workflowSteps.map((step, index) => (
            <WorkflowStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
