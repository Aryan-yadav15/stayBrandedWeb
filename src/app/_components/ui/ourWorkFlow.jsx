"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react";
const workflowSteps = [
  {
    id: 1,
    title: "Identify Opportunities",
    description:
      "Analyze workflows to identify opportunities where AI can create impact.",
    content: {
      type: "analysis",
      items: [
        { id: 1, title: "Customer Service Requests", status: "Operational" },
        { id: 2, title: "Data Pattern Recognition", status: "Operational" },
        { id: 3, title: "Anomaly Detection", status: "Operational" },
        { id: 4, title: "Predictive Maintenance", status: "Operational" },
        { id: 5, title: "Workflow Automation", status: "Operational" },
      ],
    },
  },
  {
    id: 2,
    title: "Implement Solutions",
    description:
      "Design, implement, and test AI-driven solutions tailored to your needs.",
    content: {
      type: "implementation",
      items: [
        { id: 1, title: "Custom Model Development", status: "In Progress" },
        { id: 2, title: "Data Pipeline Integration", status: "Pending" },
        { id: 3, title: "Workflow Deployment", status: "Complete" },
      ],
    },
  },
  {
    id: 3,
    title: "Monitor & Optimize",
    description: "Track performance and fine-tune AI solutions for efficiency.",
    content: {
      type: "optimization",
      items: [
        { id: 1, title: "Model Retraining", status: "Active" },
        { id: 2, title: "Performance Monitoring", status: "Scheduled" },
        { id: 3, title: "Feedback Integration", status: "Ongoing" },
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
        <div className="w-2/3 p-2 sticky top-0 h-screen flex flex-col justify-center">
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center mr-2">
              <div className="absolute h-4 w-4 rounded-full animate-ping bg-red-500"></div>
              <div className="absolute h-4 w-4 rounded-full bg-red-500"></div>
            </div>
            <div className="flex items-center space-x-2 text-lime-400">
              <span className="text-sm">{"{02} —"}</span>
              <span className="text-sm font-bold text-white">Workflow</span>
            </div>
          </div>
          <div className="flex mt-4 mb-4">
            <p className="text-6xl text-left text-white max-w-full font-semibold">
              This is how our{" "}
              <span className="text-lime-400 font-cursive"> Workflows </span></p>
          </div>
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
