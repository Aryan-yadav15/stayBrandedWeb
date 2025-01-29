"use client"
import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Clock from "./Clock";

export default function Footer() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="min-h-screen bg-[#F7F4EB] flex flex-col items-center justify-center px-4 py-10 md:py-20 relative">
      {/* Main Content */}
      <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium text-gray-400">COFFEE OR SAKE?</h2>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">LET'S ROLL.</h1>
        
        {/* Custom Clock */}
        <Clock />
        
        <div className="space-y-2">
          <p className="text-sm md:text-base text-gray-400">
            Are you in a Good Place? Enjoy your time.
          </p>
          <p className="text-sm md:text-base text-gray-400">
            We're ahead of the clock, on{" "}
            <span className="text-black font-bold">New Delhi (IST)</span>.
          </p>
        </div>

        {/* Social Media Links - Grid for mobile, Flex for desktop */}
        <div className="grid grid-cols-2 gap-2 md:flex md:justify-center md:space-x-4 max-w-sm mx-auto md:max-w-none">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-2 md:p-3 rounded-lg flex items-center justify-between md:justify-center md:flex-row md:gap-4 bg-black hover:bg-lime-400 transition-colors"
              aria-label={link.name}
            >
              <p className="text-white text-sm md:text-base">{link.name}</p>
              <link.icon className="w-5 h-5 md:w-6 md:h-6 text-lime-500" />
            </Link>
          ))}
        </div>

        {/* Talk with Us Button */}
        <div className="space-y-4 pt-4">
          <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black rounded-full font-medium hover:bg-yellow-400 transition-colors text-sm md:text-base">
            Talk with Us
          </button>
        </div>
      </div>

      {/* Logo - Using viewport width to ensure single line */}
      <div className="mt-8 md:mt-2 w-full overflow-hidden">
        <div className="relative w-full text-center whitespace-nowrap">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[12vw] font-black tracking-tighter inline-block">
            STAY BRANDED
            <sup className="text-[4vw] md:text-[1.5vw] align-top ml-2 tracking-wider">TM</sup>
          </h1>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];