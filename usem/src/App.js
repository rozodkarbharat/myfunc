import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';
import Child from './Child';

function App() {
  const [i, seti] = useState(0)
  const [j, setj] = useState(0)
  const mychild=useMemo(()=>{
    return <Child i={i}></Child>;
  },[j])
  return (
    <div className="App">
      <h1>{i}</h1>
      <button onClick={() => seti(i + 1)}>click i</button>
      <button onClick={() => setj(j + 1)}>click j</button>
      <Child i={i}></Child>
      {mychild}
    </div>
  );
}

export default App;
