"use client"

import { motion } from "framer-motion"

export default function MarketingSections() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-14">
      {/* Influencer Marketing Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Expand Your Reach With{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Influencers
          </span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl">
          We connect you with the right influencers to help amplify your message. Our partnerships are designed to
          create authentic connections between your brand and your audience, driving both engagement and results.
        </p>

        <div className="grid gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-400">Influencer Research & Campaign Strategy</h3>
                <p className="text-gray-400">
                  We analyze data to identify the perfect match for your brand. Our comprehensive research ensures that
                  every partnership aligns with your audience and objectives.
                </p>
              </div>
              <div className="h-64 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80" />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <p className="text-gray-400 order-2 md:order-1">
                From campaign ideation to execution, we handle every aspect of your influencer marketing strategy. Our
                end-to-end management ensures seamless delivery and maximum impact.
              </p>
              <div className="h-64 rounded-xl bg-gradient-to-br from-teal-500 via-emerald-500 to-lime-500 opacity-80 order-1 md:order-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Custom{" "}
          <span className="bg-gradient-to-r from-lime-400 to-teal-400 text-transparent bg-clip-text">
            Web Development
          </span>{" "}
          For Your Business
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl">
          Get fully responsive, end-to-end solutions that fuel your business for a zero-effort deployment performance.
          From simple websites to enterprise e-commerce solutions, we bring your vision to life with cutting-edge
          technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800"
            >
              <div className="w-12 h-12 mb-4 rounded bg-gradient-to-br from-lime-400 to-teal-400 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Responsive Websites",
    description:
      "Build responsive, mobile-first websites that adapt to any screen size, ensuring your content looks great everywhere.",
    icon: <LayoutIcon className="w-6 h-6 text-black" />,
  },
  {
    title: "Custom Solutions",
    description:
      "Design and develop solutions tailored specifically to your business needs—no templates, just unique excellence.",
    icon: <CodeIcon className="w-6 h-6 text-black" />,
  },
  {
    title: "CMS Integration",
    description: "Seamlessly integrate content management systems that make updating your website effortless.",
    icon: <DatabaseIcon className="w-6 h-6 text-black" />,
  },
  {
    title: "E-Commerce Platforms",
    description: "Build powerful online stores with secure payments, inventory management, and customer analytics.",
    icon: <ShoppingCartIcon className="w-6 h-6 text-black" />,
  },
  {
    title: "Performance Optimization",
    description: "Optimize your website for lightning-fast loading speeds and exceptional user experience.",
    icon: <ZapIcon className="w-6 h-6 text-black" />,
  },
  {
    title: "API Development",
    description: "Create robust APIs that power your applications and integrate with third-party services.",
    icon: <ServerIcon className="w-6 h-6 text-black" />,
  },
]

// Import icons from lucide-react
import { LayoutIcon, CodeIcon, DatabaseIcon, ShoppingCartIcon, ZapIcon, ServerIcon } from "lucide-react"

