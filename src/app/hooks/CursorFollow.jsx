"use client"
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorDot = () => {
  const cursorX = useMotionValue(-100); // Start offscreen
  const cursorY = useMotionValue(-100);

  // Spring configuration for the main dot
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Spring configuration for the trailing circle
  const trailingConfig = { damping: 15, stiffness: 150 };
  const trailingX = useSpring(cursorX, trailingConfig);
  const trailingY = useSpring(cursorY, trailingConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Add cursor styles to body

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <div className="w-3 h-3 bg-lime-400 rounded-full" />
      </motion.div>

      {/* Trailing circle */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: trailingX,
          top: trailingY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <div className="w-10 h-10 rounded-full border border-lime-400 opacity-50" />
      </motion.div>
    </>
  );
};

export default CursorDot