"use client";

import { useState } from "react";
import {motion} from "motion/react";


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AnimatedDaySelector() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-1/2 bg-[#D9D9D9] flex justify-around items-center p-2 rounded-full text-gray-500 overflow-hidden">
      {days.map((day, i) => (
        <motion.button
          layout
          key={i}
          onClick={() => setActive(i)}
          className={`relative z-10 w-20 h-10 flex items-center justify-center font-medium rounded-full transition-colors ${
            active === i ? "text-white" : "text-gray-600 hover:text-black"
          }`}
        >
          {/* Animated highlight inside the active button */}
          {active === i && (
            <motion.div
              layoutId="activeDay"
              className="absolute inset-0 bg-[#063D3B] rounded-full z-0"
              transition={{ type: "tween", stiffness: 300, damping: 25 }}
            />
          )}
          <span className="relative z-10 cursor-pointer">{day}</span>
        </motion.button>
      ))}
    </div>
  );
}