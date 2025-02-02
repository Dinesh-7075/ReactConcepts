/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import Practice from './Components/Practice'
import SetHtml from './Components/SetHtml'
import Pagination from './Components/Pagination'
import StatesAndProps from './Components/StatesAndProps';
import ImageCarousel from './Components/ImageCarousel';
import ToggleTheme from './Components/ToggleTheme';
import UseMemoCbRef from './Components/UseMemoCbRef';
import ColorChange from './Components/ColorChange';
import DragAndDrop from './Components/DragAndDrop';
import { Outlet } from 'react-router-dom';
import TableEditDelete from './Components/TableEditDelete';
import SnakeGameComp from './snakeGame/SnakeGameComp';
import ValiidateCardDetails from './Components/ValidateCardDetails';

const data = "Dineshreddy"
const App = () => {
  const initialData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  const [data, setData] = useState(initialData);

  const handleEdit = (item) => {
    alert(`Edit ${item.name}`);
    // Add your edit logic here
  };

  const handleDelete = (item) => {
    setData(data.filter(d => d.id !== item.id));
  };

  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [branch, setBranch] = useState("");

  async function apiCall() {
    const postData = {
      "name": name,
      "percentage": percentage,
      "branch": branch,
    }

    const response = await fetch("http://localhost:8081/student/add", {
      method: "POST",
      headers: ({"Content-Type": "application/json", charset:"utf8", "myValue" : percentage}),
      body: JSON.stringify(postData),
    });
    // const response = await fetch("http://localhost:8081/deleteStudent/6", {
    //   method: "DELETE",
    //   headers: ({"Content-Type": "application/json", charset:"utf8", "Access-Control-Allow-Origin": "*"}),
    //   body: JSON.stringify(postData),
    // });
    const data = await response.json();
    console.log("==========> apiData ", data);
    setData([data]);
  }

  return (
    <div>
    {/* <input className="border m-5 px-2" onChange={(e)=>setName(e.target.value)}></input>
    <input className="border m-5 px-2" onChange={(e)=>setPercentage(e.target.value)}></input>
    <input className="border m-5 px-2" onChange={(e)=>setBranch(e.target.value)}></input>
      <button className="border m-5 px-2" onClick={apiCall}>Api Call</button> */}
      {/* <TableEditDelete data={data} onEdit={handleEdit} onDelete={handleDelete} />

      <Practice />  */}

      {/* <input>qwertyu</input> */}
      {/*
      <SetHtml /> 
      <Pagination />
      <StatesAndProps name={data} place="Hyd"/> */}
      {/* <ImageCarousel />  */}
      {/* <ToggleTheme /> */}
      {/* <ColorChange /> */}
      {/* <DragAndDrop /> */}
      {/* <Pagination />
      <UseMemoCbRef />*/}
      <Outlet /> 
      {/* <Pagination /> */}
      {/* <SnakeGameComp /> */}
      <ValiidateCardDetails />
    </div>
  )
}

export default App