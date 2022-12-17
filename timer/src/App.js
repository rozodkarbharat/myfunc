import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [time, settime] = useState(0)
  const [isStaeted, setisStaeted] = useState(false)
  const timer = useRef(null)
  function handlestarttimer(){
    if(!isStaeted)
  { timer.current=setInterval(()=>{
  settime((time)=>time+1)
  },1000)
  setisStaeted(true);
}
  }
  function handlecleartimer(){
    clearInterval(timer.current)
    settime(0)
    setisStaeted(false)
  }
  function handlestoptimer(){
clearInterval(timer.current);
setisStaeted(false);
  }
  return (
    <div className="App">
      <p>{time}</p>
      <button onClick={handlestarttimer}>Start</button>
      <button onClick={handlestoptimer}>Stop</button>
      <button onClick={handlecleartimer}>reset</button>
    </div>
  );
}

export default App;
