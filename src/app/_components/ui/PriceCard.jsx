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
      name: "Starter",
      price: "499",
      description: "Perfect for small businesses starting their AI journey",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "1 AI Project",
        "Basic automation workflows",
        "Email support",
        "5 Team members",
        "2GB storage",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "999",
      description: "Ideal for growing businesses requiring more AI power",
      icon: <Star className="w-6 h-6" />,
      features: [
        "5 AI Projects",
        "Advanced automations",
        "Priority support",
        "15 Team members",
        "20GB storage",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom AI needs",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Unlimited AI Projects",
        "Custom automations",
        "24/7 Support",
        "Unlimited members",
        "Unlimited storage",
        "Custom analytics",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-black/90 min-h-screen p-8 sticky top-0 px-24">
      <div className="flex items-center space-x-2 text-lime-400">
        <span className="text-sm">{"{03}"}</span>
        <span className="text-sm">— Plans we provide</span>
      </div>
      <div className="flex mt-4 mb-4">
        <p className="text-6xl text-left text-white w-[1000px] font-semibold">
          Three flexible plans designed to fit your needs.
        </p>
      </div>
      <div className="flex mb-20">
        <p className="text-md text-left text-lime-300 w-[1000px]">
          Choose the plan that best suits your business requirements and start
          leveraging the power of AI today.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl sticky top-0 mx-auto grid md:grid-cols-3 gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={item}
            className={`relative rounded-2xl p-8 ${
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
