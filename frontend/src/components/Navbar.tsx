"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

function Navbar() {
  const pathname = usePathname();
  const pageName = pathname.split("/").filter(Boolean).pop();

  return (
    <div className="bg-[#E7E9EB] h-[12vh] w-[98%] mt-4 rounded-4xl flex justify-center gap-160 items-center ">
      <div className="flex items-center  w-[20%] h-[60%] rounded-full justify-center gap-3 font-[productsans] text-white text-2xl">
        <div>
          <Image
            className="bg-[#1198AA] p-2 rounded-full"
            src="/images/roadmap.png"
            alt="error"
            width={50}
            height={50}
          />
        </div>

        <h2 className="uppercase bg-clip-text bg-gradient-to-r from-[#1198AA] to-[#073D44] text-transparent text-4xl font-extrabold">
          {pageName}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-[60px] h-[60px]">
          {/* Default Image */}
          <motion.img
            src="/images/user2.png"
            alt="user2"
            className="rounded-full absolute top-0 left-0"
            width={60}
            height={60}
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }} // fades out on hover
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          {/* Hover Image */}
          <motion.img
            src="/images/user3.png"
            alt="user3"
            className="rounded-full absolute top-0 left-0"
            width={60}
            height={60}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }} // fades in on hover
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>

        <div>
          <h2 className="text-[1.3rem]">Abhirup Sarkar (Sejuti Lover)</h2>
          <span className="text-[#A4A4A4]">abhirupxsejuti@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
