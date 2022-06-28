import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export const Header = () => {
  var total = 0;

  const cart = useSelector((state) => state.cart.cartItems);
  Object.keys(cart).map((key, i) => {
    total = total + cart[key].qty;
  });

  return (
    <div className="header-div">
      <div></div>
      <div className="header-right">
        <div>cart({total})</div>
        <div>
          <Link to={"/register"}>Register</Link>
        </div>
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};
