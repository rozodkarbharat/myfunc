import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [time, settime] = useState(0)
  const timer = useRef(null)
  function handlestarttimer(){
   timer.current=setInterval(()=>{
  settime((time)=>time+1)
  },1000)
  }
  function handlestoptimer(){
clearInterval(timer.current);
  }
  return (
    <div className="App">
      <p>{time}</p>
      <button onClick={handlestarttimer}>Start</button>
      <button onClick={handlestoptimer}>Stop</button>
    </div>
  );
}

export default App;
