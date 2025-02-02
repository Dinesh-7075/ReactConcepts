import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ColorChange = () => {
    const [colorChange, setColorChange] = useState('bg-green-400');
  let abc = {
    width:'90px',
    height: '45px',
    fontWeight: 'bold',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
 function handleClick(e) {
    e.target.style.backgroundColor = 'red';
 }
  return (
    <div className='flex'>
        <div style={abc}><Link to="/abcd">1</Link></div>
        <div style={abc}>2</div>
        <div style={abc}>3</div>
        <div style={abc}>4</div>
        <div style={abc}>5</div>
        <div style={abc}>6</div>
        <div style={abc}>7</div>
        <div style={abc}><Link to="/">8</Link></div>
    </div>
  )
}

export default ColorChange