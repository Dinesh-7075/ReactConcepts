import { useState } from "react";

function StateWithObj() {

  const [coins, setCoins] = useState({gold:0, silver:0, bronze:0});
  console.log("value of coins is ", coins);
  function incGold() {
    setCoins({...coins, gold:coins.gold+1});
  }
  function incSilver() {
    setCoins({...coins, silver:coins.silver+1});
  }
  function incBronze() {
    setCoins({...coins, bronze:coins.bronze+1});
  }

  return (
    <div>
        <h3 className="my-5 ml-5 underline">State with Objects</h3>
        <h1 className="ml-5">Gold = {coins.gold} , Silver = {coins.silver} , Bronze = {coins.bronze}</h1>
        <button onClick={incGold} className="mx-5 my-2 border p-1">Increase Gold</button>
        <button onClick={incSilver} className="mx-5 my-2 border p-1">Increase Silver</button>
        <button onClick={incBronze} className="mx-5 my-2 border p-1">Increase Bronze</button>
    </div>
  );
  
}

export default StateWithObj;