import React from 'react'
import { useDispatch } from 'react-redux';
import { Login } from './redux/AuthReducer/action';

const Signup = () => {
   const state= useSelector(state)
    const dispatch=useDispatch()
    function handleclick(){
       dispatch(Login("hello"))
    }
  return (
    <div>
      <button onClick={handleclick}>Click</button>
    </div>
  );
}

export default Signup
