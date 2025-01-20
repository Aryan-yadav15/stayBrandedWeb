import React from 'react';
import { motion, useAnimate } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Vanne",
    role: "Director of Foundry",
    content: "Conversion turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales."
  },
  {
    id: 2,
    name: "Chris Wright",
    role: "CEO of MindAwakened",
    content: "Thanks to Conversion, our business experienced a remarkable turnaround. Their expertise in paid advertising helped us reach new heights."
  },
  {
    id: 3,
    name: "Belinda Meyers",
    role: "CTO of Relay",
    content: "We were skeptical about paid advertising until we found Conversion. It's doubled our revenue in just a few months."
  },
  {
    id: 4,
    name: "Melissa Reid",
    role: "Founder of Tuesday",
    content: "Conversion expanded our capabilities! Their approach to paid advertising is revolutionary and effective."
  }
];

const TestimonialCard = React.memo(({ testimonial }) => (
  <motion.div 
    className="p-6 rounded-lg bg-lime-600 backdrop-blur-sm border border-slate-700/50 mb-6 relative"
    initial={{ opacity: 0.8 }}
    whileHover={{ opacity: 1 }}
    style={{ 
      minWidth: '350px',
      margin: '0 20px',
      willChange: 'transform' // Optimize for animations
    }}
  >
    <p className="text-gray-200 text-sm mb-4">&quot;{testimonial.content}&quot;</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-600"></div>
      <div>
        <h3 className="font-medium text-white text-sm">{testimonial.name}</h3>
        <p className="text-xs text-gray-400">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
));

const CARD_WIDTH = 390;

const InfiniteList = ({ items, direction = "left", speed = 1 }) => {
  const [scope, animate] = useAnimate();
  const [mounted, setMounted] = React.useState(false);
  
  // Memoize the repeated items
  const loopItems = React.useMemo(() => [...items, ...items, ...items, ...items], [items]);
  
  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const totalWidth = items.length * CARD_WIDTH;
    const startX = direction === "left" ? 0 : -totalWidth;
    const endX = direction === "left" ? -totalWidth : 0;
    
    // Use CSS transform for better performance
    const animation = async () => {
      await animate(scope.current, {
        x: [startX, endX]
      }, {
        duration: (100 / speed), // Adjust duration based on speed
        ease: "linear",
        repeat: Infinity
      });
    };

    animation();
  }, [mounted, items, direction, speed, animate, scope]);

  return (
    <div className="relative overflow-hidden h-full">
      <motion.div
        ref={scope}
        className="flex"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: direction === "left" ? 'translateX(0)' : `translateX(-${items.length * CARD_WIDTH}px)`
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
  const row1 = React.useMemo(() => testimonials.slice(0, 2), []);
  const row2 = React.useMemo(() => testimonials.slice(2, 4), []);

  return (
    <div className=" overflow-hidden bg-gray-800 rounded-2xl flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid grid-rows-2 gap-8 pr-4 overflow-hidden">
        <div className="w-full h-[200px]">
          <InfiniteList items={row1} direction="right" speed={5} />
        </div>
        <div className="w-full h-[200px]">
          <InfiniteList items={row2} direction="left" speed={5} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;