import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Authenticate = ({children}) => {
    const [token, settoken] = useState(JSON.parse(localStorage.getItem("token"))||'')
    const {pathname}=useLocation()
    if(token){
      return children
    }
    else{
  return <Navigate to="/login" state={{from:pathname}} replace/>
    }

}

export default Authenticate
