import React from "react";
import { useState } from "react";
const ToggleTheme = () => {
  const [themeValue, setThemeValue] = useState("light");
  
  function handleToggle() {
    if (themeValue === "light") setThemeValue("dark");
    else setThemeValue("light");
  }
  return (
    <div className={"mx-1 " + (themeValue==="light" ? "light" : "dark")}>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            ></svg>
          </span>
          <button
            className="text-slate-500 dark:text-white dark:border-white mt-2 text-sm border border-black rounded-md mx-3 w-20"
            onClick={handleToggle}
          >
            {themeValue}
          </button>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
};

export default ToggleTheme;
