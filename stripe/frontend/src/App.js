import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CheckoutCancel from "./Pages/CheckoutCancel";
import CheckOutSuccess from "./Pages/checkOutSuccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/checkout-success" element={<CheckOutSuccess />} />
        <Route path="/checkout-cancel" element={<CheckoutCancel />} />
      </Routes>
    </div>
  );
}

export default App;
