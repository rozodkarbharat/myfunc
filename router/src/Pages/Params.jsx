import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Params = () => {
  const [state, setstate] = useState("")
  const navigate=useNavigate()
  function handleclick(){
    navigate(`/${state}`)
  }
  return (
    <div>
      <Navbar />
      <input
        value={state}
        onChange={(e) => setstate(e.target.value)}
        type="text"
      />
      <button onClick={handleclick}>click</button>
    </div>
  );
}

export default Params
