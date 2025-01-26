"use client"
import React from "react"
import { motion } from "framer-motion"

export const CardStack = ({ items }) => {
  return (
    <div className="relative h-[400px] w-full">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute bg-zinc-800/50 p-6 rounded-xl shadow-lg border border-lime-400/20"
          style={{
            width: "100%",
            top: `${index * 20}px`,
            left: `${index * 20}px`,
            zIndex: items.length - index,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-4">
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold text-lime-400">{item.name}</h3>
              <p className="text-gray-300">{item.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}