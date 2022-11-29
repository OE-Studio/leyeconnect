import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


import {
  HiUser,
  HiBriefcase,
  HiLockClosed,
  HiGlobe,
  HiFolderOpen,
  HiPhotograph,
  HiChatAlt2,
  // eslint-disable-next-line
  HiMoon,
  // eslint-disable-next-line
  HiSun,
} from "react-icons/hi";
import { RiBuildingFill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
// eslint-disable-next-line
import Audio from "./Audio";

const menu = [
  { icon: <HiUser />, label: "About me", lock: false, to: "/" },
  { icon: <HiBriefcase />, label: "Works", lock: true, to: "/works" },
  { icon: <HiGlobe />, label: "Articles I read", lock: true, to: "/articles" },
  { icon: <HiFolderOpen />, label: "Resources", lock: true, to: "/resources" },
  {
    icon: <RiBuildingFill />,
    label: "Work places",
    lock: true,
    to: "/work-places",
  },
  { icon: <HiPhotograph />, label: "Gallery", lock: true, to: "/gallery" },
  {
    icon: <MdDescription />,
    label: "Personal Journal",
    lock: true,
    to: "/journal",
  },
  { icon: <HiChatAlt2 />, label: "Contact", lock: true, to: "/contact" },
];

const SideBarItem = ({ icon, label, lock, to }) => {
  const { pathname } = useLocation();
  const location = pathname.split("/");
  const active = to !== "#" && location[1] === to.split("/")[1];
  const mainClass = active
    ? `flex items-center text-2xl menuGradient`
    : `flex items-center text-2xl `;
  const borderClass = active
    ? `w-[2px] h-full bg-[rgb(231,110,59)]`
    : `w-[2px] h-full`;
  const iconClass = active ? `text-orange-500` : `text-dark-150`;
  const labelClass = active
    ? `dark:text-dark-50 text-dark-400`
    : `dark:text-dark-150 text-dark-200`;

  return (
    <div className={mainClass}>
      <div className={borderClass}></div>
      <div className="flex ml-[34px] py-2 items-center justify-between w-full lg:pr-[44px]">
        <div className="flex items-center gap-5  dark:text-dark-200">
          <div className={iconClass}>{icon}</div>
          <p className={`font-inter ${labelClass} text-base `}>{label}</p>
        </div>

        {lock && (
          <div className="">
            <HiLockClosed className="dark:text-dark-200 text-dark-50" />
          </div>
        )}
      </div>
    </div>
  );
};

const MobileMenuBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <section className="fixed bottom-10 md:hidden z-[99999999] w-full p-4">
      {/* <Audio/> */}
      <div className="relative">
        <div className="flex items-center justify-between gap-6">
          <div
            className="flex items-center justify-between w- bg-[#E0E3E4] dark:bg-[#1E1E1E]  px-[24px] py-[18px] dark:text-dark-50 rounded-[10px] w-[80%] border border-dark-50 dark:border-[#3A3A3A] justify-self-stretch"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <div className="flex gap-4 dark:text-dark-50 items-center">
              <HiUser />
              <p>About me</p>
            </div>
            <HiMenu />
            <HiX className="hidden" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-[#E0E3E4] dark:bg-dark-500  border border-dark-50 dark:border-[#3A3A3A] p-2 gap-[4px] h-[60px] aspect-square w-[60px]">
            <div className="dark:bg-dark-200 bg-[#3A3A3A] w-[2px] h-[5px]"></div>
            <div className="dark:bg-dark-200 bg-[#3A3A3A] w-[2px] h-[5px]"></div>
            <div className="dark:bg-dark-200 bg-[#3A3A3A] w-[2px] h-[5px]"></div>
            <div className="dark:bg-dark-200 bg-[#3A3A3A] w-[2px] h-[5px]"></div>
            <div className="dark:bg-dark-200 bg-[#3A3A3A] w-[2px] h-[5px]"></div>
          </div>
        </div>
        {toggleMenu && (
          <motion.div className="absolute bg-[#ffffff] dark:bg-[#292929] bottom-[130%] w-full rounded-[10px] " initial={{y:500}}
          animate={{y:0}}>
            <div className="flex flex-col gap-3 py-4 pr-6 w-full md:gap-5 lg:gap-3"
            
            
            >
              {menu.map((eachMenu, index) => {
                return (
                  <SideBarItem
                    key={index}
                    icon={eachMenu.icon}
                    label={eachMenu.label}
                    lock={eachMenu.lock}
                    to={eachMenu.to}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MobileMenuBar;
