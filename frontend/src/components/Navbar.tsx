"use client";

import react from "react";
import Image from "next/image";


import { usePathname } from "next/navigation";
import { div } from "motion/react-client";

function Navbar(){

  const pathname = usePathname(); // e.g. "/blog/post-1"
  const pageName = pathname.split("/").filter(Boolean).pop();


  return(
   
    <div className="bg-[#E7E9EB] h-[12vh] w-[98%] mt-4 rounded-4xl flex justify-center gap-160 items-center ">

      <div className="flex items-center bg-gradient-to-r from-[#1198AA] to-[#073D44] w-[20%] h-[60%] rounded-full justify-center gap-3 font-[productsans] text-white text-2xl">
        <div>
          <Image
            className=""
            src="/images/roadmap.png"
            alt="error"
            width={30}
            height={30} />
        </div>

        <h2 className="capitalize bg-clip-text bg-gradient-to-l from-[#4cb9c7] to-[#FFFFFF] text-transparent">{pageName}</h2>
      </div>


      <div className="flex items-center gap-4">
        <Image
          className=""
          src="/images/user.png"
          alt="error"
          width={60}
          height={60} />

          <div>
          <h2 className="text-[1.3rem]">Arjya Ghosh</h2>
          <span className="text-[#A4A4A4]">arjyaghosh123@gmail.com</span>
          </div>
      </div>
   </div>
  )
}


export default Navbar;