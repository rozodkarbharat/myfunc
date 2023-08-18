import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

let cartItems = [];

const PayButton = () => {
  const navigate = useNavigate()
  function handleCheckout() {
    axios
      .post("http://localhost:5000/create-checkout-session", {
        cartItems,
        username: "bharat",
      })
      .then((res) => {
        if (res.data?.url) {
           window.location.href = res.data.url
        }
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

export default PayButton;
