/* eslint-disable no-unused-vars */

import "../index.css";
import { useRef, useState } from "react";
import StateWithObj from "./StateWithObj";

function Practice() {
  const [state, setState] = useState("");
  const [dist, setDist] = useState("");
  const [name, setName] = useState("");
  const [btnClick, setBtnClick] = useState(false);

  const addName = (e) => {
    setName(e.target.value);
    setBtnClick(false);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setDist("");
  };
 
  const inputRef = useRef(null);

  function incVal(){
    inputRef.current.focus();
    console.log("=======> ", inputRef);
  }


  return (
    <div className="App">
    <input ref={inputRef}></input>
    <button className="border m-5 px-2" onClick={incVal}>Increase</button>
      <select
        className="border m-5 px-2"
        onChange={handleStateChange}
        value={state}
      >
        <option value="">--select state--</option>
        <option value="Telangana">Telangana</option>
        <option value="AP">Andhra Pradesh</option>
        <option value="MH">Maharastra</option>
        <option value="KN">Karnataka</option>
        <option value="TMNL">Tamilnadu</option>
      </select>
      <select className="border m-5 px-2" disabled={state === ""}>
        <option value="">--select district--</option>
        {state === "Telangana" && (
          <>
            <option>Hyderabad</option>
            <option>Warangal</option>
            <option>Haryana</option>
            <option>Medak</option>
          </>
        )}
        {state === "AP" && (
          <>
            <option>Kadapa</option>
            <option>Kurnool</option>
            <option>Chitoor</option>
            <option>Prakasham</option>
          </>
        )}
        {state === "MH" && (
          <>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Nagpur</option>
            <option>Aurangabad</option>
          </>
        )}
        {state === "KN" && (
          <>
            <option>Bangalore</option>
            <option>Udipi</option>
            <option>Vijayapura</option>
            <option>Kodagu</option>
          </>
        )}
        {state === "TMNL" && (
          <>
            <option>Chennai</option>
            <option>Coimbattoor</option>
            <option>Salem</option>
            <option>Erode</option>
          </>
        )}
      </select>

      <StateWithObj />

      <h3 className="my-3 ml-5 underline">Set State functions</h3>
      <input
        className="border m-5 px-2"
        type="text"
        onChange={addName}
        placeholder="Enter Name"
      ></input>
      <button
        className="mx-5 my-2 border p-1"
        onClick={() => setBtnClick(true)}
      >
        Submit
      </button>
      <p className="m-5">
        {btnClick === true && name !== "" && name.toUpperCase()}
      </p>
      <p className="m-5">{name.toUpperCase()}</p>
    </div>
  );
}

export default Practice;
