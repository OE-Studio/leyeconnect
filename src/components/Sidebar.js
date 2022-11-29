import React, { useState } from "react";
import avatar from "../assets/images/avatar.svg";
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import {
  HiUser,
  HiBriefcase,
  HiLockClosed,
  HiGlobe,
  HiFolderOpen,
  HiPhotograph,
  HiChatAlt2,
  HiMoon,
  HiSun,
} from "react-icons/hi";
import { RiBuildingFill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
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
    : `flex items-center text-2xl`;
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
          <p className={`font-inter ${labelClass} text-base hidden lg:block`}>
            {label}
          </p>
        </div>

        {lock && (
          <div className="hidden lg:block">
            <HiLockClosed className="dark:text-dark-200 text-dark-50" />
          </div>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({toggleBar, setToggleBar}) => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("light");
  

  const toggleSideBar = ()=>{
setToggleBar(!toggleBar);
  }


  return (
    <div className="fixed top-0 h-screen left-0 hidden md:flex">
      {toggleBar && <section className="md:flex md:w-[100px] lg:w-[300px] xl:w-[350px] flex-col items-center lg:items-start font-inter dark:bg-[rgb(41,41,41)] bg-[#E8E8E8] pb-[44px]">
        <div className="flex items-center gap-5 p-[16px_16px_24px_8px] border-b dark:border-[#3A3A3A] border-dark-50 lg:ml-[34px] mt-[28px] lg:mr-[40px]">
          <img src={avatar} alt="" />
          <p className="font-inter dark:text-[#9E9E9E]  xl:text-[20px] hidden lg:block">
            Oyeleye Ogunsanya
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-[60px] w-full md:gap-5 lg:gap-3">
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

        <div
          className="flex items-center mt-auto md:mb-[100px] xl:mb-[0] dark:text-white lg:ml-[44px] gap-2"
          onClick={() => {
            if (localStorage.theme === "dark") {
              localStorage.setItem("theme", "light");
              setTheme("light");
              window.location.reload();
              return;
            } else {
              localStorage.setItem("theme", "dark");
              setTheme("dark");
              window.location.reload();
              return;
            }
          }}
        >
          <div className="flex items-center gap-1 rounded-full border dark:border-[#353535] border-dark-50 p-[4px] cursor-pointer">
            <div className="h-6 w-6 rounded-full dark:bg-black grid place-items-center">
              <HiMoon className="dark:text-[#4D74FF] text-[#848484]" />
            </div>
            <p className="dark:text-[#9E9E9E]">/</p>
            <div className="h-6 w-6 rounded-full dark:bg-transparent bg-white grid place-items-center">
              <HiSun className="dark:text-[#9E9E9E] text-[#4D74FF]" />
            </div>
          </div>
          <p className="hidden lg:block dark:text-[#848484] text-[#3a3a3a]">
            {localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
              ? `Dark Mode`
              : `Light Mode`}
          </p>
        </div>
      </section>}
      <div className="mx-4 mt-[68px]" onClick={toggleSideBar}>
        <svg
        className="fill-dark-150"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 0.25C17.6989 0.25 17.8897 0.329018 18.0303 0.46967C18.171 0.610322 18.25 0.801088 18.25 1L18.25 15.25C18.25 15.4489 18.171 15.6397 18.0303 15.7803C17.8897 15.921 17.6989 16 17.5 16C17.3011 16 17.1103 15.921 16.9697 15.7803C16.829 15.6397 16.75 15.4489 16.75 15.25L16.75 1C16.75 0.801088 16.829 0.610322 16.9697 0.46967C17.1103 0.329018 17.3011 0.25 17.5 0.25ZM13.53 14.72C13.6705 14.8606 13.7493 15.0512 13.7493 15.25C13.7493 15.4488 13.6705 15.6394 13.53 15.78L9.78 19.53C9.71134 19.6037 9.62854 19.6628 9.53654 19.7038C9.44454 19.7448 9.34523 19.7668 9.24452 19.7686C9.14382 19.7704 9.04379 19.7518 8.9504 19.7141C8.85701 19.6764 8.77218 19.6203 8.70096 19.549C8.62974 19.4778 8.5736 19.393 8.53588 19.2996C8.49816 19.2062 8.47963 19.1062 8.48141 19.0055C8.48319 18.9048 8.50523 18.8055 8.54622 18.7135C8.58721 18.6215 8.64631 18.5387 8.72 18.47L11.19 16L1 16C0.801088 16 0.610322 15.921 0.46967 15.7803C0.329017 15.6397 0.25 15.4489 0.25 15.25C0.25 15.0511 0.329017 14.8603 0.46967 14.7197C0.610322 14.579 0.801088 14.5 1 14.5L11.19 14.5L8.72 12.03C8.64631 11.9613 8.58721 11.8785 8.54622 11.7865C8.50523 11.6945 8.48319 11.5952 8.48141 11.4945C8.47963 11.3938 8.49816 11.2938 8.53588 11.2004C8.5736 11.107 8.62974 11.0222 8.70096 10.951C8.77218 10.8797 8.85701 10.8236 8.9504 10.7859C9.04379 10.7482 9.14382 10.7296 9.24452 10.7314C9.34523 10.7332 9.44454 10.7552 9.53654 10.7962C9.62854 10.8372 9.71134 10.8963 9.78 10.97L13.53 14.72ZM13 0.25C13.1989 0.25 13.3897 0.329018 13.5303 0.46967C13.671 0.610322 13.75 0.801088 13.75 1L13.75 10.75C13.75 10.9489 13.671 11.1397 13.5303 11.2803C13.3897 11.421 13.1989 11.5 13 11.5C12.8011 11.5 12.6103 11.421 12.4697 11.2803C12.329 11.1397 12.25 10.9489 12.25 10.75L12.25 1C12.25 0.801088 12.329 0.610322 12.4697 0.46967C12.6103 0.329018 12.8011 0.25 13 0.25ZM8.5 0.25C8.69891 0.25 8.88968 0.329018 9.03033 0.46967C9.17098 0.610322 9.25 0.801088 9.25 1L9.25 6.25C9.25 6.44891 9.17098 6.63968 9.03033 6.78033C8.88968 6.92098 8.69891 7 8.5 7C8.30109 7 8.11032 6.92098 7.96967 6.78033C7.82902 6.63968 7.75 6.44891 7.75 6.25L7.75 1C7.75 0.801088 7.82902 0.610322 7.96967 0.46967C8.11032 0.329018 8.30109 0.25 8.5 0.25Z"
            
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
