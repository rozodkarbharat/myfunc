import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Detail = () => {
  const location=useLocation()

  const param=useParams()
    useEffect(() => {
      document.title=param.param
    })
  return (
    <div>
      <Navbar />
      <h1>Detail</h1>
      <h2>{param.param}</h2>
    </div>
  );
}

export default Detail
