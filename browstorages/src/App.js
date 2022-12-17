import logo from './logo.svg';
import './App.css';
import SessionStorage from './components/SessionStorage';
import LocalStorage from './components/LocalStorage';

function App() {
  return (
    <div className="App">
      <LocalStorage/>
      <SessionStorage/>
    </div>
  );
}

export default App;
