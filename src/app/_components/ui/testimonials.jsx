"use client";
import React from "react";
import { motion, useAnimate } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Vanne",
    role: "Director of Foundry",
    content:
      "Conversion's revolutionary approach transformed our marketing ROI by 300% in just 90 days! Their paid advertising mastery is simply unparalleled.",
    avatar: "🟢",
  },
  {
    id: 2,
    name: "Chris Wright",
    role: "CEO of MindAwakened",
    content:
      "We achieved 10x customer acquisition costs efficiency. Conversion's team are true growth alchemists!",
    avatar: "🔵",
  },
  {
    id: 3,
    name: "Belinda Meyers",
    role: "CTO of Relay",
    content:
      "From sceptics to evangelists - Conversion doubled our ARR while cutting CAC by 40%. Pure magic!",
    avatar: "🟣",
  },
  {
    id: 4,
    name: "Melissa Reid",
    role: "Founder of Tuesday",
    content:
      "Our conversion rates skyrocketed 150% month-over-month. These wizards redefined performance marketing!",
    avatar: "🟠",
  },
];

const TestimonialCard = React.memo(({ testimonial }) => (
  <motion.div
    className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl border border-lime-400/20 shadow-2xl relative mx-4"
    initial={{ opacity: 0.9, y: 10 }}
    whileHover={{
      opacity: 1,
      y: 0,
      scale: 1.02,
      boxShadow: "0 20px 40px -10px rgba(163, 230, 53, 0.15)",
    }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{
      minWidth: "420px",
      willChange: "transform",
    }}
  >
    <div className="absolute top-4 right-4 text-lime-400/20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <p className="text-lg leading-relaxed text-lime-100/90 mb-6 font-medium italic">
      &ldquo;{testimonial.content}&rdquo;
    </p>
    <div className="flex items-center gap-4 border-t border-lime-400/10 pt-6">
      <div className="w-12 h-12 rounded-full bg-lime-900/50 border border-lime-400/20 flex items-center justify-center text-xl">
        {testimonial.avatar}
      </div>
      <div>
        <h3 className="font-bold text-lime-300 text-lg">{testimonial.name}</h3>
        <p className="text-sm text-lime-400/80">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
));

const CARD_WIDTH = 468;

const InfiniteList = ({ items, direction = "left", speed = 40 }) => {
  const [scope, animate] = useAnimate();
  const [mounted, setMounted] = React.useState(false);

  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const totalWidth = items.length * CARD_WIDTH;
    const startX = direction === "left" ? 0 : -totalWidth;
    const endX = direction === "left" ? -totalWidth : 0;

    const animation = async () => {
      await animate(
        scope.current,
        {
          x: [startX, endX],
        },
        {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }
      );
    };

    animation();
  }, [mounted, items, direction, speed, animate, scope]);

  return (
    <div className="relative overflow-hidden h-full">
      <motion.div
        ref={scope}
        className="flex"
        style={{
          willChange: "transform",
          transform:
            direction === "left"
              ? "translateX(0)"
              : `translateX(-${items.length * CARD_WIDTH}px)`,
        }}
      >
        {loopItems.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} testimonial={item} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-lime-900/20 to-gray-950 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 space-y-16">
          <div className="h-[300px] transform translate-y-6">
            <InfiniteList
              items={testimonials.slice(0, 2)}
              direction="right"
              speed={35}
            />
          </div>
          <div className="h-[280px] transform -translate-y-6">
            <InfiniteList
              items={testimonials.slice(2, 4)}
              direction="left"
              speed={38}
            />
          </div>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-0 mask-linear-0.015 opacity-10 bg-[size:40px_40px] bg-grid-lime-400/20" />
      </div>
    </div>
  );
};

export default TestimonialSection;
