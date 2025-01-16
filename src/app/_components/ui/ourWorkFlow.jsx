"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "Identify Tasks",
    description: "Workflows to identify tasks AI can automate and optimize.",
    content: {
      type: "bug-list",
      items: [
        { id: 1, title: "Voice Assistant Bugs", status: "Operational" },
        { id: 2, title: "Speech Recognition", status: "Operational" },
        { id: 3, title: "Natural Language Processing", status: "Operational" },
        { id: 4, title: "Intent Classification", status: "Operational" },
        { id: 5, title: "Response Generation", status: "Operational" },
      ],
    },
  },
  {
    id: 2,
    title: "Develop & Integrate",
    description: "Next, we develop and integrate AI solutions into your workflows.",
    content: {
      type: "integration",
      items: [
        { id: 1, title: "AI Model Integration", status: "In Progress" },
        { id: 2, title: "System Architecture", status: "Pending" },
        { id: 3, title: "API Development", status: "Complete" },
      ],
    },
  },
  {
    id: 3,
    title: "Refine & Improve",
    description: "Then, we continuously refine and improve your AI solutions.",
    content: {
      type: "improvements",
      items: [
        { id: 1, title: "Performance Metrics", status: "Active" },
        { id: 2, title: "Model Optimization", status: "Scheduled" },
        { id: 3, title: "Error Analysis", status: "Ongoing" },
      ],
    },
  },
];

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "operational":
    case "complete":
    case "active":
      return <CheckCircle className="w-4 h-4 text-emerald-400" />;
    case "in progress":
    case "ongoing":
      return <Clock className="w-4 h-4 text-blue-400 animate-spin-slow" />;
    case "pending":
    case "scheduled":
      return <AlertCircle className="w-4 h-4 text-amber-400" />;
    default:
      return <CheckCircle className="w-4 h-4 text-gray-400" />;
  }
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "operational":
    case "complete":
    case "active":
      return "bg-emerald-400/10 text-emerald-400 border-emerald-400/20";
    case "in progress":
    case "ongoing":
      return "bg-blue-400/10 text-blue-400 border-blue-400/20";
    case "pending":
    case "scheduled":
      return "bg-amber-400/10 text-amber-400 border-amber-400/20";
    default:
      return "bg-gray-400/10 text-gray-400 border-gray-400/20";
  }
};

const ContentSection = ({ step, index, onInView }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      onViewportEnter={() => onInView(index)}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
      className="min-h-screen flex items-center"
    >
      <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-full shadow-2xl">
        <div className="space-y-6">
          {step.content.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: false }}
              className="group bg-gray-800/50 border border-gray-700/50 p-6 rounded-xl flex items-center justify-between hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getStatusIcon(item.status)}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Last updated 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm px-4 py-1.5 rounded-full border ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-black/90 flex">
      {/* Left Side - Sticky Steps */}
      <div className="w-1/3 p-8 sticky top-0 h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Workflow</span>
          </h1>
          <p className="text-gray-400 text-base">Streamlined process for optimal results</p>
        </motion.div>

        <div className="space-y-6 mt-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`transition-all duration-500 transform ${
                activeStep === index
                  ? "opacity-100 translate-x-4"
                  : "opacity-40 hover:opacity-60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                  activeStep === index
                    ? "bg-yellow-400/20 text-yellow-400"
                    : "bg-gray-800 text-gray-500"
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-200 mb-0.5">{step.title}</h2>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side - Scrolling Content */}
      <div className="w-2/3 p-12">
        <div className="space-y-32">
          {workflowSteps.map((step, index) => (
            <ContentSection
              key={step.id}
              step={step}
              index={index}
              onInView={setActiveStep}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;