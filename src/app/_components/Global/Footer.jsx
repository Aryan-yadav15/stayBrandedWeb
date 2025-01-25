"use client"

import { useEffect, useState } from "react"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import Clock from "./Clock"

export default function Footer() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="min-h-screen bg-[#F7F4EB] flex flex-col items-center justify-center px-4 py-20 relative">
      {/* Social Media Links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-yellow-400 transition-colors"
            aria-label={link.name}
          >
            <link.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium text-gray-400">COFFEE OR SAKE?</h2>
        <h1 className="text-6xl md:text-8xl font-bold">LET'S ROLL.</h1>

        {/* Custom Clock */}
        <Clock/>

        <div className="space-y-2">
          <p className="text-gray-400">Are you in a Good Place? Enjoy your time.</p>
          <p className="text-gray-400">
            We're ahead of the clock, on <span className="text-white">Lisbon Time (WET)</span>.
          </p>
        </div>

        <div className="space-y-4">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-yellow-400 transition-colors">
            Talk with Us
          </button>
          <div>
            <Link href="/book" className="text-gray-400 hover:text-yellow-400 transition-colors">
              or Book a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
          TONEMAKI
          <sup className="text-xl align-super ml-2">TM</sup>
        </h1>
      </div>
    </footer>
  )
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

