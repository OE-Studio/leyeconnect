import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MobileMenuBar from "./components/MobileMenuBar";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // eslint-disable-next-line
  }, [localStorage.theme]);

  const [toggleBar, setToggleBar] = React.useState(false);
  const bodyClass = toggleBar ? "md:ml-[100px] lg:ml-[300px] xl:ml-[350px]" : ""

  return (
    <>
      {/* <bgsound src = "/html/yourfile.mdi"/> */}
      <MobileMenuBar/>
      <Sidebar toggleBar={toggleBar} setToggleBar={setToggleBar} />
      <div className={`${bodyClass} dark:bg-[#212121] bg-[#f5f5f5] xl:h-screen p-4 md:pl-[54px] md:p-10 md:h-screen md:overflow-hidden xl:pt-[63px] md:pb-10 xl:pb-0 font-inter`}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
