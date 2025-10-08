"use client";

import React from "react";
import { motion } from "motion/react";
import AnimatedDaySelector from "@/components/AnimatedDaySelector";

const DynamicRoadmap = () => {
  // Your roadmap data - easily add or remove items
  const roadmapItems = [
    {
      title: "Complete Fundamentals",
      tasks: [
        "CPU memory storage",
        "IP subnets",
        "git branches",
        "Exponential/Logarithmic equations (inc. RC)",
        "Boolean equations (software)",
        "Numeral conversion",
      ],
    },
    {
      title: "Complete Fundamentals",
      tasks: [
        "CPU memory storage",
        "IP subnets",
        "git branches",
        "Exponential/Logarithmic equations (inc. RC)",
        "Boolean equations (software)",
        "Numeral conversion",
      ],
    },
    {
      title: "Complete Fundamentals",
      tasks: [
        "CPU memory storage",
        "IP subnets",
        "git branches",
        "Exponential/Logarithmic equations (inc. RC)",
        "Boolean equations (software)",
        "Numeral conversion",
      ],
    },
  ];

  const itemHeight = 200;
  const curveOffset = 100;
  const dotRadius = 8;
  const svgCenterX = 400;

  // Calculate total height based on number of items
  const totalHeight = itemHeight * (roadmapItems.length + 2);

  // Generate smooth S-curve path
  const generateCurvePath = () => {
    let path = `M ${svgCenterX} 80`; // Start point

    for (let i = 1; i <= roadmapItems.length + 1; i++) {
      const currentY = 80 + i * itemHeight;
      const prevY = 80 + (i - 1) * itemHeight;
      const midY = (prevY + currentY) / 2;

      const isLeft = i % 2 === 1;
      const offsetX = isLeft ? -curveOffset : curveOffset;

      // Create smooth S-curve using quadratic bezier
      path += ` Q ${svgCenterX + offsetX} ${midY}, ${svgCenterX} ${currentY}`;
    }

    return path;
  };

  // Generate arrow path from curve to box with curve
  const generateArrowPath = (index: number) => {
    const y = 80 + (index + 1) * itemHeight;
    const isLeft = (index + 1) % 2 === 1;
    const startX = svgCenterX;
    const horizontalExtend = 240;
    const endX = isLeft
      ? svgCenterX - horizontalExtend
      : svgCenterX + horizontalExtend;
    const controlPointOffset = 60;
    const controlX = isLeft
      ? svgCenterX - controlPointOffset
      : svgCenterX + controlPointOffset;
    const controlY = y - 70;

    return `M ${startX} ${y} Q ${controlX} ${controlY}, ${endX} ${y}`;
  };

  // Animation variants for the entire container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Framer motion variant for roadmap cards
  const cardVariants = {
    hidden: (isLeft: number) => ({
      opacity: 0,
      x: isLeft ? -100 : 100,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Framer motion variant for dots on the curve
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.3,
        type: "spring" as const,
        damping: 10,
        stiffness: 200,
      },
    }),
  };

  // Framer motion variant for arrows to roadmap boxes
  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (index: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + index * 0.3,
        pathLength: { duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100 p-8 overflow-x-hidden">
      <AnimatedDaySelector />
      <motion.div
        className="relative"
        style={{ width: "1000px", height: `${totalHeight}px` }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="absolute top-0 left-0"
          width="1000"
          height={totalHeight}
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0">
                <animate
                  attributeName="offset"
                  values="0;1;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#5eead4" stopOpacity="1">
                <animate
                  attributeName="offset"
                  values="0.3;1;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0">
                <animate
                  attributeName="offset"
                  values="1;0;1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            <marker
              id="arrowhead-left"
              markerWidth="12"
              markerHeight="12"
              refX="1"
              refY="6"
              orient="auto"
            >
              <polygon points="12 0, 12 12, 0 6" fill="#94a3b8" />
            </marker>
            <marker
              id="arrowhead-right"
              markerWidth="12"
              markerHeight="12"
              refX="11"
              refY="6"
              orient="auto"
            >
              <polygon points="0 0, 0 12, 12 6" fill="#94a3b8" />
            </marker>
          </defs>

          {/* Static main curve */}
          <path
            d={generateCurvePath()}
            fill="none"
            stroke="#cbd5e1" // subtle grey
            strokeWidth="3"
            strokeDasharray="8,6" // optional dashed effect
          />

          {/* Main center curve */}
          <motion.path
            d={generateCurvePath()}
            fill="none"
            stroke="#0B4F4A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="20 20" // dash length + gap length
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -220 }} // move dash down along the path
            transition={{
              duration: 2, // speed of the glow
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Start dot */}
          <motion.circle
            cx={svgCenterX}
            cy="80"
            r={dotRadius}
            fill="#0f766e"
            stroke="#fff"
            strokeWidth="2"
            variants={dotVariants}
            custom={0}
          />

          {/* Item dots and arrows */}
          {roadmapItems.map((_, index) => {
            const y = 80 + (index + 1) * itemHeight;

            return (
              <g key={index}>
                {/* Dot on curve */}
                <motion.circle
                  cx={svgCenterX}
                  cy={y}
                  r={dotRadius}
                  fill="#0f766e"
                  stroke="#fff"
                  strokeWidth="2"
                  variants={dotVariants}
                  custom={index + 1}
                />

                {/* Arrow to box */}
                <motion.path
                  d={generateArrowPath(index)}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  variants={arrowVariants}
                  custom={index}
                />
              </g>
            );
          })}

          {/* End dot */}
          <motion.circle
            cx={svgCenterX}
            cy={80 + (roadmapItems.length + 1) * itemHeight}
            r={dotRadius}
            fill="#0f766e"
            stroke="#fff"
            strokeWidth="2"
            variants={dotVariants}
            custom={roadmapItems.length + 1}
          />
        </svg>

        {/* Start button */}
        <motion.div
          className="absolute"
          style={{ top: "48px", left: `${svgCenterX + 80}px` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", damping: 15 }}
        >
          <motion.button
            className="bg-teal-800 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start
          </motion.button>
        </motion.div>

        {/* Roadmap items */}
        {roadmapItems.map((item, index) => {
          const isLeft = (index + 1) % 2 === 1;
          const top = 80 + (index + 1) * itemHeight - 110;
          const left = isLeft ? 20 : 610;

          return (
            <motion.div
              key={index}
              className="absolute w-80"
              style={{
                top: `${top}px`,
                left: `${left}px`,
              }}
              custom={isLeft}
              variants={cardVariants}
            >
              <motion.div
                className="bg-teal-900 text-white rounded-2xl p-6 shadow-2xl"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                <ol className="text-sm space-y-2 mb-5">
                  {item.tasks.map((task, taskIndex) => (
                    <motion.li
                      key={taskIndex}
                      className="leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.3 + taskIndex * 0.1 }}
                    >
                      {taskIndex + 1}. {task}
                    </motion.li>
                  ))}
                </ol>
                <div className="flex justify-end">
                  <motion.button
                    className="bg-teal-400 text-teal-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-300 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Stop button */}
        <motion.div
          className="absolute"
          style={{
            top: `${80 + (roadmapItems.length + 1) * itemHeight - 22}px`,
            left: `${svgCenterX + 80}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, type: "spring", damping: 15 }}
        >
          <motion.button
            className="bg-teal-800 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Stop
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DynamicRoadmap;
