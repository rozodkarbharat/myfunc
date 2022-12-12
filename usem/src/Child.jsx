import React, { useEffect } from 'react'
var count=0
const Child = ({i}) => {
    useEffect(() => {
       count++
       console.log(count)
    })
  return (
    <div>
     child component {count}
    </div>
  )
}

export default Child
