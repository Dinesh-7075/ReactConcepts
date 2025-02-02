import React, { useEffect, useState } from 'react';
import './validateCardDetails.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";

const ValiidateCardDetails = () => {
  const [selectedOption, setSelectedOption] = useState('Select Transaction Type');
  const [inputValue, setInputValue] = useState('');
  const [startDuration, setStartDuration] = useState('');
  const [endDuration, setEndDuration] = useState('');
  const [isDisabled, setIsDisabled] = useState(selectedOption=="Select Transaction Type" ? true : false);
  const [banner,setBanner] = useState(false);
  const options = ["Select Transaction Type", "NEFT", "IMPS", "RTGS"];
  const handleNotificationBanner = () => {
    setBanner(false);
  }
  useEffect(()=> {
    if(banner) {
        setTimeout(()=> {
            setBanner(false);
        }, 5000);
    }
  }, [banner]);

  const NotificationBanner = () => {
    return(
    <div className="notification">
        <div style={{display:"flex", alignItems:"center"}}>
            <FaExclamationTriangle className="warning-icon" /><span> Error occurred while submitting data...! </span> 
        </div>
        <button onClick={()=>{handleNotificationBanner()}}><IoCloseSharp className='close-icon'/></button>
    </div>)
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStartDurationChange = (event) => {
    setStartDuration(event.target.value);
  };

  const handleEndDurationChange = (event) => {
    setEndDuration(event.target.value);
  };

  async function apiCall() {
    setIsDisabled(true);
    const postData = {
      "transactionType": selectedOption,
      "inputvalue": inputValue,
      "startDuration": startDuration,
      "endDuration": endDuration
    }
    console.log("=>postData ", postData);
    const response = await fetch("http://localhost:8081/addTransaction", {
      method: "POST",
      headers: ({"Content-Type": "application/json", charset:"utf8"}),
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    setBanner(true);
    console.log("==========> apiData ", data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiCall();
  };

  return (
    <>
    {banner && <NotificationBanner />}
    <p className="title"><b>Title</b></p>
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <select 
          id="dropdown" 
          value={selectedOption} 
          onChange={handleOptionChange} 
          className="form-control"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {selectedOption != 'Select Transaction Type' && <div className="form-group">
        <label htmlFor="input">Input Value<sup style={{color:"red"}}>*</sup></label>
        <input 
          type="text" 
          id="input" 
          value={inputValue} 
          onChange={handleInputChange} 
          className="form-control" 
        />
      </div>}

        {inputValue != '' && <div className="form-group">
            <label htmlFor="startDuration">Start Duration:</label>
            <input 
            type="date" 
            id="startDuration" 
            value={startDuration} 
            onChange={handleStartDurationChange} 
            className="form-control" 
            />
        </div>}

      {inputValue != '' && <div className="form-group">
        <label htmlFor="endDuration">End Duration:</label>
        <input 
          type="date" 
          id="endDuration" 
          value={endDuration} 
          onChange={handleEndDurationChange} 
          className="form-control" 
        /> 
      </div>}

        <button type="submit" className="submit-btn" onClick={(e)=>handleSubmit(e)} disabled={selectedOption=="Select Transaction Type" ? true : false}>Submit</button>
    </form>
    </>
  );
};

export default ValiidateCardDetails;