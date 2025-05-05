"use client";
import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout } from "react-icons/si";
import { FaAngleRight, FaCheck, FaAccusoft } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { menuOpen } = useContext(MenuContext);
  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${menuOpen ? "w-60 p-4" : " w-0"}`}
        >
          <ul>
            <li className="flex justify-start items-center gap-2 hover:bg-blue-200 hover:text-blue-800 p-2 rounded-xl">
              <IoHomeOutline />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center gap-2 hover:bg-blue-200 hover:text-blue-800 p-2 rounded-xl">
              <GrProjects />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center gap-2 hover:bg-blue-200 hover:text-blue-800 p-2 rounded-xl">
              <FaCheck />
              <h3 className="flex-1">Singule</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center gap-2 hover:bg-blue-200 hover:text-blue-800 p-2 rounded-xl">
              <FaAccusoft />
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center gap-2 hover:bg-blue-200 hover:text-blue-800 p-2 rounded-xl">
              <SiHelpscout />
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="flex justify-start items-center gap-2 hover:bg-blue-200 hover:text-blue-800 p-2 rounded-xl">
              <MdWifiCalling3 /> <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </aside>
        <main className="bg-red-300 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
