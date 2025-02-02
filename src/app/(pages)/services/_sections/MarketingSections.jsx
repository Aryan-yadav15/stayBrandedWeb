"use client";

import { motion } from "framer-motion";
import {
  LayoutIcon,
  CodeIcon,
  DatabaseIcon,
  ShoppingCartIcon,
  ZapIcon,
  ServerIcon,
} from "lucide-react";

export default function MarketingSections() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-14">
      {/* Influencer Marketing Section */}
      <section className="max-w-7xl mx-auto mb-32 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {/* Header Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full" />
              <div className="h-5 w-5 bg-lime-500 rounded-full" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-lime-400">{"{02} —"}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-lime-200">
                Marketing Solutions
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Expand Your Reach With{" "}
            <span className="bg-gradient-to-r from-lime-400 to-teal-300 text-transparent bg-clip-text">
              Influencers
            </span>
          </h2>

          <p className="text-lg text-lime-100/80 max-w-3xl mb-10">
            We connect you with the right influencers to help amplify your
            message. Our partnerships create authentic connections between your
            brand and audience, driving engagement and results.
          </p>
        </div>

        {/* Enhanced Cards Section */}
        <div className="grid gap-8 mt-4">
          {/* First Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-lime-400/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-400/10 to-transparent opacity-20" />
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              {/* Text Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-teal-300 bg-clip-text text-transparent">
                  Influencer Research & Campaign Strategy
                </h3>
                <p className="text-lime-100/70">
                  We analyze data to identify the perfect match for your brand.
                  Comprehensive research ensures every partnership aligns with
                  your audience and objectives.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-sm">
                    Audience Analysis
                  </span>
                  <span className="px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-sm">
                    KPI Mapping
                  </span>
                </div>
              </div>
              {/* Image Section */}
              <div className="min-h-48 md:h-64 rounded-xl bg-gradient-to-br from-lime-500/30 via-teal-500/30 to-emerald-500/30 backdrop-blur-lg border border-lime-400/20">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Data analytics dashboard"
                  className="w-full h-full object-cover rounded-xl mix-blend-luminosity"
                />
              </div>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-teal-400/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-teal-400/10 to-transparent opacity-20" />
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              {/* Image Section */}
              <div className="min-h-48 md:h-64 rounded-xl bg-gradient-to-br from-teal-500/30 via-emerald-500/30 to-lime-500/30 backdrop-blur-lg border border-teal-400/20 order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Team collaborating on digital strategy"
                  className="w-full h-full object-cover rounded-xl mix-blend-luminosity"
                />
              </div>
              {/* Text Section */}
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-lime-300 bg-clip-text text-transparent">
                  Full Campaign Management
                </h3>
                <p className="text-lime-100/70">
                  From ideation to execution, we handle every aspect of your
                  influencer marketing strategy. End-to-end management ensures
                  seamless delivery and maximum impact.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm">
                    Content Strategy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm">
                    Performance Analytics
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="max-w-7xl mx-auto px-3">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full" />
              <div className="h-5 w-5 bg-lime-500 rounded-full" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-lime-400">{"{03} —"}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-lime-200">
                Worldwide solutions
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Custom{" "}
            <span className="bg-gradient-to-r from-lime-400 to-teal-400 text-transparent bg-clip-text">
              Web Development
            </span>{" "}
            For Your Business
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Get fully responsive, end-to-end solutions that fuel your business
            for a zero-effort deployment performance. From simple websites to
            enterprise e-commerce solutions, we bring your vision to life with
            cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 mb-4 rounded bg-gradient-to-br from-lime-400 to-teal-400 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Responsive Websites",
    description:
      "Build responsive, mobile-first websites that adapt to any screen size, ensuring your content looks great everywhere.",
    icon: <LayoutIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />,
  },
  {
    title: "Custom Solutions",
    description:
      "Design and develop solutions tailored specifically to your business needs—no templates, just unique excellence.",
    icon: <CodeIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />,
  },
  {
    title: "CMS Integration",
    description:
      "Seamlessly integrate content management systems that make updating your website effortless.",
    icon: <DatabaseIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />,
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Build powerful online stores with secure payments, inventory management, and customer analytics.",
    icon: <ShoppingCartIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize your website for lightning-fast loading speeds and exceptional user experience.",
    icon: <ZapIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />,
  },
  {
    title: "API Development",
    description:
      "Create robust APIs that power your applications and integrate with third-party services.",
    icon: <ServerIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />,
  },
];
