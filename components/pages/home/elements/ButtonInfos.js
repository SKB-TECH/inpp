import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
function ButtonInfos(lin) {
  return (
    <Link
      href="" className="flex items-center justify-center w-44 p-2 px-3 border-gray-400 border gap-2 text-gray-500 rounded-sm mt-3 hover:bg-[#fc7000] hover:text-white"
    >
      Learn More{" "}
      <FiArrowUpRight color="#ffffff" className=" animate-pulse " />
    </Link>
  );
}

export default ButtonInfos;