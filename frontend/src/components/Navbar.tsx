"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { pageTitleMap } from "@/constants/constant";
import { SearchBox } from "@/components/SearchBox";

function AnimatedTitle({ pageName }: { pageName: string }) {
  return (
    <motion.h2
      key={pageName} // triggers animation on route change
      initial={{ opacity: 0, y: 40 }} // start lower & invisible
      animate={{ opacity: 1, y: 0 }} // end in place
      transition={{
        type: "spring",
        stiffness: 500, // strong spring
        damping: 25, // controls bounce
      }}
      className="uppercase bg-clip-text bg-gradient-to-r from-[#1198AA] to-[#073D44] text-transparent text-4xl font-extrabold"
    >
      {pageName}
    </motion.h2>
  );
}

function Navbar() {
  const pathname = usePathname();
  const pageName = pathname.split("/").filter(Boolean).pop();

 if(pageName === "ytai"){
    document.querySelector("#SearchBox")?.classList.remove("hidden");
 }

 else{
   document.querySelector("#SearchBox")?.classList.add("hidden");
 }
  

  return (
    <div className="bg-[#E7E9EB] h-[12vh] w-[98%] mt-4 rounded-4xl flex justify-between p-5 items-center">
      <div className="flex items-center w-[20%] h-[60%] rounded-full justify-start gap-3 font-[productsans] text-white text-2xl">
        <Image
          className="invert"
          src={pageTitleMap.find((page) => page.title === pageName)?.imgPath || "/images/error.png"}
          alt="error"
          width={50}
          height={50}
        />

        <AnimatedTitle pageName={pageName || "Dashboard"} />
      </div>

      <div className="w-full flex justify-center"  id="SearchBox">
      <SearchBox />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-[60px] h-[60px]">
          <motion.img
            src="/images/user2.png"
            alt="user2"
            className="rounded-full absolute top-0 left-0"
            width={60}
            height={60}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold uppercase tracking-tighter -mb-2">
            Abhirup Sarkar
          </h2>
          <span className="text-[#A4A4A4] text-sm">
            abhirupsarkar2525@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
