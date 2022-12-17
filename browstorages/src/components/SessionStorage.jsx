import React, { useState } from 'react'

const SessionStorage = () => {
  const [state, setstate] = useState("")
    const handleclick=()=>{
      sessionStorage.setItem("state",JSON.stringify(state))
    }
  return (
    <div>
        <h1>Session storage</h1>
      <input type="text" value={state} onChange={(e)=>setstate(e.target.value)}/>
      <button onClick={handleclick}>click</button>
    </div>
  )
}

export default SessionStorage
