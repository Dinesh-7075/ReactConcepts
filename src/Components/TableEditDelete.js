// src/components/Table.js
import React, { useEffect, useRef, useState } from 'react';
import './Table.css'; // Create this CSS file for styling

const TableEditDelete = ({ data, onEdit, onDelete }) => {
  const [activeRow, setActiveRow] = useState(null);
 const [showMenuBar, setShowMenuBar] = useState(false);
 let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      console.log(e);
      if(!menuRef?.current?.contains(e.target)){
        setActiveRow(null);
        setShowMenuBar(false);
        console.log(menuRef?.current);
      }      
    };
    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });

  console.log("from table component ==> ", data)

  const handleMoreOptionsClick = (rowIndex) => {
    setShowMenuBar(!showMenuBar);
    setActiveRow(activeRow === rowIndex ? null : rowIndex);
  };

  const handleEditClick = (item) => {
    onEdit(item);
    setShowMenuBar(false);
    setActiveRow(null);
  };

  const handleDeleteClick = (item) => {
    onDelete(item);
    setShowMenuBar(false);
    setActiveRow(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{item.rollNo}</td>
            <td>{item.name}</td>
            <td>
              <div className="menu-container">
                <button
                  className="more-options"
                  onClick={() => handleMoreOptionsClick(index)}
                >
                  &#8230;
                </button>
                {activeRow === index && showMenuBar &&(
                  <div className="menu" ref={menuRef}>
                    <button onClick={() => handleEditClick(item)}>Edit</button>
                    <button onClick={() => handleDeleteClick(item)}>Delete</button>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEditDelete;
