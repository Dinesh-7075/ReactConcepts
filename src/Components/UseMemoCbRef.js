import React from "react";
import { useState, useMemo, useRef } from "react";
import { findNthPrime } from "../helpers";

const UseMemoCbRef = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [num, setNum] = useState("");

  let ref = useRef(0);
  console.log(ref);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  // const prime = findNthPrime(num);
  const prime = useMemo(() => { return findNthPrime(num)}, [num]);
  return (
    <div
      className={
        "mx-1 w-[500px] h-60 border-2 rounded-lg " +
        (isDarkTheme ? "bg-black text-white" : "bg-white text-black")
      }
    >
      <button
        className="float-right m-2 border p-1 rounded-lg"
        onClick={() => setDarkTheme(!isDarkTheme)}
      >
        Toggle
      </button>
      <button
        className="float-right m-2 border p-1 rounded-lg"
        onClick={handleClick}
      >
        Click ref
      </button>
      <input
        className="w-60 p-2 m-2 block border-2 border-black text-black"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <h1 className="font-bold text-lg m-1">Nth prime Number is {prime}</h1>
    </div>
  );
};

export default UseMemoCbRef;
