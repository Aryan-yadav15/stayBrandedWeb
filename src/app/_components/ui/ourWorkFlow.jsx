"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    description:
      "Next, we develop and integrate AI solutions into your workflows.",
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
      return <CheckCircle className="w-4 h-4 text-lime-400" />;
    case "in progress":
    case "ongoing":
      return <Clock className="w-4 h-4 text-lime-400 animate-spin-slow" />;
    case "pending":
    case "scheduled":
      return <AlertCircle className="w-4 h-4 text-lime-400" />;
    default:
      return <CheckCircle className="w-4 h-4 text-gray-400" />;
  }
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "operational":
    case "complete":
    case "active":
      return "bg-lime-400/10 text-lime-400 border-lime-400/20";
    case "in progress":
    case "ongoing":
      return "bg-lime-400/10 text-lime-400 border-lime-400/20";
    case "pending":
    case "scheduled":
      return "bg-lime-400/10 text-lime-400 border-lime-400/20";
    default:
      return "bg-gray-400/10 text-gray-400 border-gray-400/20";
  }
};

const ContentSection = ({ step, index, onInView, lenis }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.3 && latest < 0.7) {
        onInView(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, index, onInView]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen flex items-center"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 w-full shadow-2xl">
        <div className="space-y-4">
          {step.content.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              className="group bg-black/50 border border-gray-800 p-4 rounded-xl flex items-center justify-between hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getStatusIcon(item.status)}
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    Last updated 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" />
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
  const containerRef = useRef(null);

  return (
    <div className="flex flex-col" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-2"
      >
        {/* Header content remains the same... */}
      </motion.div>
      <div className="min-h-screen bg-black/10 flex">
        <div className="w-2/3 p-12 sticky top-0 h-screen flex flex-col justify-center">
          <div className="space-y-8 mt-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={`transition-all duration-300 transform ${
                  activeStep === index
                    ? "opacity-100 translate-x-4"
                    : "opacity-40 hover:opacity-60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeStep === index
                        ? "bg-lime-400/20 text-lime-400"
                        : "bg-gray-900 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-gray-200 mb-1">
                      {step.title}
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Scrolling Content */}
        <div className="w-2/3 p-8">
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
    </div>
  );
};

export default WorkflowAnimation;
