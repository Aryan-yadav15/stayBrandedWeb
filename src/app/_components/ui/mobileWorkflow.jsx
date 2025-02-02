"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const MobileWorkflow = () => {
  const [activeStep, setActiveStep] = useState(null);

  const workflowSteps = [
    {
      id: 1,
      title: "Identify Opportunities",
      description: "Analyze workflows to identify opportunities where AI can create impact.",
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
      description: "Design, implement, and test AI-driven solutions tailored to your needs.",
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

  return (
    <div className="flex flex-col p-4 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-2"
      >
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center mr-2">
            <div className="absolute h-3 w-3 rounded-full animate-ping bg-red-500"></div>
            <div className="absolute h-3 w-3 rounded-full bg-red-500"></div>
          </div>
          <div className="flex items-center space-x-2 text-lime-400">
            <span className="text-xs">{"{02} —"}</span>
            <span className="text-xs font-bold text-white">Workflow</span>
          </div>
        </div>
        <h1 className="text-3xl text-white font-semibold">
          This is how our <span className="text-lime-400 font-cursive">MObile Workflows</span>
        </h1>
      </motion.div>

      <div className="space-y-4">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-xl border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setActiveStep(activeStep === index ? null : index)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                  activeStep === index ? "bg-lime-400/20 text-lime-400" : "bg-gray-900 text-gray-500"
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-200">{step.title}</h2>
                  <p className="text-xs text-gray-400 mt-1">{step.description}</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                  activeStep === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeStep === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 border-t border-gray-800 space-y-3">
                    {step.content.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="group bg-black/50 border border-gray-800 p-3 rounded-xl flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                            {getStatusIcon(item.status)}
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-200">{item.title}</h3>
                            <p className="text-xs text-gray-400">Last updated 2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileWorkflow;