import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Login = () => {
  const {state}=useLocation()
  const navigate=useNavigate()

  function handleclick(){
    localStorage.setItem("token",JSON.stringify("token"))
   if(state.from){
    navigate(state.from, {replace:true})
   }
   else{
   navigate("/")
   }
  }
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <button onClick={handleclick}>Login</button>
    </div>
  );
}

export default Login
