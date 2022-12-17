import React, { useState } from 'react'

const LocalStorage = () => {
     const [state, setstate] = useState("");
     
     const handleclick = () => {
       localStorage.setItem("state", JSON.stringify(state));
     };
  return (
    <div>
      <h1>Local storage</h1>
      <input
        type="text"
        value={state}
        onChange={(e) => { setstate(e.target.value)
        }}
      />
      <button onClick={handleclick}>click</button>
    </div>
  );
}

export default LocalStorage
