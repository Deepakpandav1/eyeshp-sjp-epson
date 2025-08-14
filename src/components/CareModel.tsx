import React, { useState, useEffect } from "react";
import { careModelData } from "../utils/appUtils/constant";
import { AnimatePresence, motion } from "framer-motion";

const directionVariants = {
  top: { y: -50, opacity: 0 },
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  "bottom-left": { x: -30, y: 50, opacity: 0 },
  "bottom-right": { x: 30, y: 50, opacity: 0 },
};

function CareModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = careModelData[activeIndex];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % careModelData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const animationProps = {
    initial: directionVariants[activeItem.direction],
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  // Responsive positions (adjust based on screen size)
  const positions = [
    { top: "-90px", left: "50%", transform: "translateX(-50%)" },
    { top: "15%", left: "-150px" },
    { bottom: "-20px", left: "-15%" },
    { top: "15%", right: "-130px" },
    { bottom: "-20px", right: "-15%" },
  ];

  return (
    <div className="w-full flex justify-center bg-white overflow-hidden">
      <div className="relative py-20 w-full max-w-[1000px] h-[700px] md:h-[800px] flex justify-center items-center">
        {/* Heading */}
        <h2 className="absolute top-5 text-xl sm:text-2xl md:text-3xl font-bold text-center text-cyan-900 z-20 px-4">
          Why Choose Dr. Preeti's Bright Eye Care Hospital
        </h2>

        {/* Outer Circle */}
        <div className="relative w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] rounded-full border border-dashed border-gray-400 flex items-center justify-center">
          {/* Center Image */}
          <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] rounded-full overflow-hidden shadow-lg z-10 border-4 border-white">
            <img
              src={activeItem.image}
              alt="care"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nodes */}
          {careModelData.map((item, idx) => (
            <div
              key={item.id}
              className="absolute text-center cursor-pointer w-[120px] sm:w-[140px] md:w-[160px]"
              style={positions[idx]}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="flex items-center justify-center mb-2">
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "bg-cyan-900 border-cyan-900"
                      : "border-gray-400"
                  }`}
                />
              </div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                {item.title}
              </div>
            </div>
          ))}

          {/* Animated Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              className="absolute -bottom-[120px] sm:-bottom-[140px] w-[260px] sm:w-[300px] md:w-[350px] text-center"
              {...animationProps}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default CareModel;
