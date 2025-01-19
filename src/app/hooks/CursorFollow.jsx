import React, { useEffect, useState } from 'react';
import { motion, animate, useMotionValue, useSpring } from 'framer-motion';

const CursorDot = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Configure spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Update the motion values
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: smoothX,
          top: smoothY,
          width: '12px',
          height: '12px',
          backgroundColor: 'lime',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
      {/* Trailing cursor effect */}
      <motion.div
        style={{
          position: 'fixed',
          left: smoothX,
          top: smoothY,
          width: '40px',
          height: '40px',
          border: '1px solid lime',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
          opacity: 0.5,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 150,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default CursorDot;