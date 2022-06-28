import React, { useEffect, useState } from "react";

import { FaRupeeSign } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

import { ImCross } from "react-icons/im";
import Button from "@mui/material/Button";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart);
  console.log("dataCart", data.cartItems);

  const [cartdata, setCartdata] = useState({ ...data.cartItems });

  var totalPrice = 0;
  var totalQty = 0;
  console.log("cart..cart", cartdata);

  useEffect(() => {
    dispatch(updateCart());
  }, [cartdata]);

  const handleCancleButton = (key) => {
    Object.keys(cartdata).filter((e) => {
      if (cartdata[e] == cartdata[key]) {
        delete cartdata[e];
      }
      localStorage.setItem("cart", JSON.stringify(cartdata));
    });
    setCartdata({ ...cartdata });
    console.log("filter", cartdata);
    console.log("key", key);
  };

  const incQty = (key) => {
    console.log("key", key);
    data.cartItems[key].qty = data.cartItems[key].qty + 1;
    console.log("incQty", data.cartItems[key].qty);
    setCartdata({ ...data.cartItems });
    localStorage.setItem("cart", JSON.stringify({ ...data.cartItems }));
  };
  const decQty = (key) => {
    data.cartItems[key].qty = data.cartItems[key].qty - 1;
    if (data.cartItems[key].qty < 1) {
      data.cartItems[key].qty = 1;

      setCartdata({ ...data.cartItems });
      localStorage.setItem("cart", JSON.stringify({ ...data.cartItems }));
    } else {
      setCartdata({ ...data.cartItems });
      localStorage.setItem("cart", JSON.stringify({ ...data.cartItems }));
    }
  };

  return (
    <div>
      <div className="cart-container">
        <div className="left-cart-div">
          {Object.keys(cartdata).map((key, i) => {
            return (
              <div className="cart">
                <div className="img-div">
                  <img
                    src={`http://localhost:5000/api/product/image/getimage/${cartdata[key].img}`}
                  ></img>
                </div>

                <div className="info-div">
                  <div>{cartdata[key].name}</div>
                  <div className="center-text">
                    <b>Price:</b>
                    <span style={{ color: "red" }}>
                      <FaRupeeSign style={{ color: "red" }} />
                      {cartdata[key].price}
                    </span>
                  </div>
                  <div className="center-text">
                    <span>
                      {" "}
                      <b> Quantity:</b>
                      {cartdata[key].qty}
                    </span>
                  </div>
                  <div className="incdec">
                    <button
                      onClick={() => {
                        incQty(key);
                      }}
                    >
                      +
                    </button>
                    <span>{cartdata[key].qty}</span>
                    <button
                      onClick={() => {
                        decQty(key);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="cancelbtn">
                  <ImCross onClick={() => handleCancleButton(key)} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-cart-div">
          {Object.keys(cartdata).map((key, i) => {
            totalPrice = totalPrice + cartdata[key].price * cartdata[key].qty;
            totalQty = totalQty + cartdata[key].qty;
            return (
              <div className="total-cart-price">
                <span>{cartdata[key].name}</span>{" "}
                <span>Quantity{cartdata[key].qty}</span>
                <span>
                  Price:
                  <FaRupeeSign style={{ color: "red" }} />
                  {cartdata[key].price}
                </span>
              </div>
            );
          })}
          <hr />
          <div className="total-div">
            <span>Total products:{totalQty}</span>{" "}
            <span>
              Total Price:
              <FaRupeeSign style={{ color: "red" }} />
              {totalPrice}
            </span>
          </div>

          <Button
            onClick={() => {
              navigate("/checkout");
            }}
            variant="outlined"
            size="large"
            style={{
              color: "white",
              backgroundColor: "#ff7900",
              marginTop: "30px",
            }}
          >
            {" "}
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};
