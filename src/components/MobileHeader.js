import React, { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import avatar from "../assets/images/avatar.svg";
import climate from "../assets/images/weather.svg";

const MobileHeader = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex justify-between items-center md:hidden mb-[58px]">
      <img src={avatar} alt="" />
      <div className="flex lg:hidden items-center rounded-full gap-2 dark:bg-dark-500 bg-white p-2 px-4">
        <img src={climate} alt="" />
        <p className="dark:text-white">Ibadan</p>
      </div>

      <div
        className="flex items-center dark:text-white lg:ml-[44px] gap-2"
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
    </div>
  );
};

export default MobileHeader;
