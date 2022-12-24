import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [token, settoken] = useState(JSON.parse(localStorage.getItem("token"))||"")
    const navigate=useNavigate()

    function handleLogout(){
      localStorage.removeItem("token")
      settoken("")
    }
  return (
    <div className="navbar">
      <p
        onClick={() => {
          navigate("/career");
        }}
      >
        Career
      </p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        param
      </p>
      {token ? (
        <p onClick={handleLogout}>Logout</p>
      ) : (
        <p
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </p>
      )}
    </div>
  );
}

export default Navbar
