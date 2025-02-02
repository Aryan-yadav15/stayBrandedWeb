"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Star, Shield } from "lucide-react";

const PricingCards = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const plans = [
    {
      name: "Brand Starter",
      price: "499",
      description: "Building a strong foundational brand presence.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Logo design (2 concepts, 2 revisions)",
        "Brand color palette definition",
        "Typography guidelines",
        "Basic brand style guide",
        "Google My Business Optimization",
        "Profile setup/optimization on 2 platforms",
        "Content planning template",
      ],
      popular: false,
    },
    {
      name: "Growth Catalyst",
      price: "999",
      description: "Expanding brand reach and driving targeted traffic.",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Brand voice and messaging guidelines",
        "Expanded brand style guide",
        "Mockups (e.g., business cards, letterhead)",
        "SEO Foundation (Keyword research, On-page optimization)",
        "Social Media Marketing (2 Platforms)",
        "Content calendar creation",
        "Responsive website design (up to 5 pages)",
        "Google My Business Management",
      ],
      popular: true,
    },
    {
      name: "Brand Dominator",
      price: "Custom",
      description: "Maximizing brand impact and driving significant business growth.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Full brand guidelines",
        "Brand asset library",
        "Brand book",
        "Full-Service SEO (Technical audit, Content strategy)",
        "Social Media Marketing (3 Platforms)",
        "Paid social media advertising",
        "Custom website design with E-commerce integration",
        "Basic mobile app development (iOS and Android)",
        "Retargeting campaigns",
        "Advanced analytics and reporting",
      ],
      popular: false,
    },
  ];
  return (
    <div className="bg-black/90 min-h-screen p-4 md:p-8 lg:px-36">
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center mr-2">
          <div className="absolute h-4 w-4 rounded-full animate-ping bg-red-500"></div>
          <div className="absolute h-4 w-4 rounded-full bg-red-500"></div>
        </div>
        <div className="flex items-center space-x-2 text-lime-400">
          <span className="text-sm">{"{04} —"}</span>
          <span className="text-sm font-bold text-white">Plans we provide</span>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <p className="text-4xl md:text-5xl lg:text-6xl text-left text-white font-semibold">
          Three <span className="text-lime-400">Flexible plans{" "}</span> designed to fit your needs.
        </p>
      </div>
      <div className="mb-8 md:mb-20">
        <p className="text-md text-left text-lime-300">
          Choose the plan that best suits your business requirements and start
          leveraging the power of AI today.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={item}
            className={`relative rounded-2xl p-6 ${
              plan.popular
                ? "bg-gradient-to-b from-emerald-500 to-emerald-700 border-2 border-emerald-400"
                : "bg-gray-800 border-2 border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-center space-x-4 mb-6">
              <div
                className={`p-3 rounded-lg ${
                  plan.popular ? "bg-emerald-400" : "bg-gray-700"
                }`}
              >
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">
                  ${plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-400 ml-2">/month</span>
                )}
              </div>
              <p className="text-gray-400 mt-2">{plan.description}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-medium mb-6 ${
                plan.popular
                  ? "bg-white text-emerald-600 hover:bg-gray-100"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              Get Started
            </motion.button>

            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Check className="w-5 h-5 text-green-400" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingCards;