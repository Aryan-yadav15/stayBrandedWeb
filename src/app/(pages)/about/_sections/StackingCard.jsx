import { motion, useScroll } from "framer-motion";

const ScrollStackingCard = ({ title, description, price }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-md"
      style={{
        transform: `translateY(${scrollYProgress * 50}px)`,
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-green-500 font-bold">${price}</p>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ScrollStackingCard