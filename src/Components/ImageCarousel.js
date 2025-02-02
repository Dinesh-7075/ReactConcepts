import React from "react";
import { useState, useEffect } from "react";
import { data } from "../constants";

const ImageCarousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [themeValue, setThemeValue] = useState("light");

  function handleToggle() {
    if (themeValue === "light") setThemeValue("dark");
    else setThemeValue("light");
  }

  function previousClickhandler() {
    if (activeImageIndex === 0) setActiveImageIndex(data.length - 1);
    else setActiveImageIndex(activeImageIndex - 1);
  }

  function nextClickhandler() {
    if (activeImageIndex === data.length - 1) setActiveImageIndex(0);
    else setActiveImageIndex(activeImageIndex + 1);
  }

  // useEffect case(1)
  useEffect(() => {
    let timer = setTimeout(() => {
      nextClickhandler();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  // useEffect(()=>console.log("useEffect called"));   // useEffect case(2)
  // useEffect(()=>console.log("useEffect called"), []);  // useEffect case(3)

  return (
    <div className={"mx-1 " + (themeValue === "light" ? "light" : "dark")}>
      <div>
        <button
          className="text-slate-500 dark:bg-slate-500 float-right dark:text-white dark:border-white mt-2 text-sm border border-black rounded-md mx-3 w-20"
          onClick={handleToggle}
        >
          {themeValue}
        </button>
      </div>
      <div className="flex justify-center dark:bg-slate-500 m-5">
        <button
          onClick={previousClickhandler}
          className="p-5 m-5 font-extrabold dark:text-white"
        >
          Previous
        </button>
        {/* {console.log("component rendered")} */}
        {data.map((url, index) => (
          <img
            key={url}
            src={url}
            alt="wallpapers" 
            className={
              "w-[500px] h-[300px] m-5 object-contain " +
              (activeImageIndex === index ? "block" : "hidden")
            }
          />
        ))}
        <button onClick={nextClickhandler} className="p-5 m-5 font-extrabold dark:text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
