"use client";

import { useState } from "react";
import { motion } from "motion/react";

import {
  LayoutGrid,
  Youtube,
  ClipboardCheck,
  FileText,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import Image from "next/image";

function Sidebar() {
  const [active, setActive] = useState("Roadmap");

  const menuItems = [
    { name: "Roadmap", icon: <LayoutGrid size={18} /> },
    { name: "Youtube AI", icon: <Youtube size={18} /> },
    { name: "Take Test", icon: <ClipboardCheck size={18} /> },
    { name: "Evaluate", icon: <FileText size={18} /> },
    { name: "Chat", icon: <MessageSquare size={18} /> },
  ];

  const generalItems = [
    { name: "Settings", icon: <Settings size={18} /> },
    { name: "Help", icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="p-4">
      <div className="w-60 h-[95.5vh] bg-[#E7E9EB] p-4 flex flex-col justify-between rounded-4xl">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt=""
            className="w-[18%]"
            width={100}
            height={100}
          />
          <span className="font-bold text-[#073D44] text-[1.2rem] font-[productsans]">
            Tutor.AI
          </span>
        </div>
        {/* Top Menu */}
        <div className="mb-20">
          <h2 className="text-[#6E6E6E] text-sm font-semibold mb-4 font-[gilroy]">
            Menu
          </h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <button
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 w-full px-4 py-2 font-[gilroy] text-sm font-medium relative z-10 cursor-pointer
                  ${
                    active === item.name
                      ? "text-white"
                      : "text-[#828282] hover:bg-gray-200"
                  }
                `}
                >
                  <motion.span
                    className="flex items-center gap-3 font-medium"
                    animate={{
                      color: active === item.name ? "#ffffff" : "#828282",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <span className="font-semibold">{item.icon}</span>
                    {item.name}
                  </motion.span>
                </button>

                {active === item.name && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-[#073D44] to-[#1198AA] shadow rounded-full"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                )}
              </li>
            ))}
          </ul>

          <h2 className="text-[#6E6E6E] text-sm font-semibold mt-6 mb-4 font-[gilroy]">
            General
          </h2>
          <ul className="space-y-2">
            {generalItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 w-full px-4 py-2  text-sm font-medium hover:bg-gray-200 transition font-[gilroy]
                
                ${
                  active == item.name
                    ? "bg-gradient-to-r from-[#073D44] to-[#1198AA] text-white shadow rounded-full"
                    : "text-[#828282] hover:bg-gray-200"
                }
                `}
                >
                  {item.icon}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="mt-4 mb-7 flex justify-center">
          <button className="flex items-center gap-3 w-[65%] justify-center px-4 py-2 bg-[#FF4545] text-white rounded-[10px] text-sm font-medium hover:bg-red-600 cursor-pointer transition">
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
