import React from 'react'
import { useState } from 'react'
const StatesAndProps = ({name, place}) => {
  const [count,setCount] = useState(0);
  
  return (
    <div>
      <span className='ml-5'>{count}</span>
      <button onClick={()=>setCount(count+1)} className='border w-10 rounded-lg m-5 bg-lime-200'>Inc</button>
      <span>{name}, {place}</span>
    </div>
  )
}

export default StatesAndProps;