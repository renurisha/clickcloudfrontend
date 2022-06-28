import React, { useEffect, useState } from "react";

import { FaRupeeSign } from "react-icons/fa";
import Button from "@mui/material/Button";
import "./checkout.css";

import { useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

import { HashRouter, useNavigate } from "react-router-dom";

export const Checkoutpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart);
  console.log("dataCart", data.cartItems);
  const auth = useSelector((state) => state.login);

  const [cartdata, setCartdata] = useState({ ...data.cartItems });
  const [username, setUsername] = useState();
  const [usermobile, setUsermobile] = useState();
  const [userpincode, setUserpincode] = useState();
  const [usercity, setUsercity] = useState();
  const [useraddress, setUseraddress] = useState();
  const [userstate, setUserstate] = useState();
  const [userlocality, setUserlocality] = useState();

  var totalPrice = 0;
  var totalQty = 0;
  console.log("cart..cart", { cartdata });

  useEffect(() => {
    dispatch(updateCart());
  }, []);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const payload = {
      address: {
        name: username,
        mobile: usermobile,
        pincode: userpincode,
        locality: userlocality,
        address: useraddress,
        city: usercity,
        state: userstate,
      },
    };
    console.log("submitAddress", payload);
  };

  return (
    <>
      <div className="checkout-container">
        <div className="left-checkout-div">
          <div className="add-address">
            <form onSubmit={handleAddressSubmit} className="address-form">
              <h2>....Fill Address Details....</h2>
              <div className="address-input">
                <div className="address-input-div">
                  <input
                    type="text"
                    placeholder="name"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="address-input-div">
                  <input
                    type="Number"
                    placeholder="mobile"
                    value={usermobile}
                    onChange={(e) => {
                      setUsermobile(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="address-input">
                <div className="address-input-div">
                  <input
                    type="text"
                    placeholder="pincode"
                    value={userpincode}
                    onChange={(e) => {
                      setUserpincode(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="address-input-div">
                  <input
                    type="text"
                    placeholder="locality"
                    value={userlocality}
                    onChange={(e) => {
                      setUserlocality(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="address-input">
                <div className="address-input-div">
                  <input
                    type="text"
                    placeholder="address"
                    value={useraddress}
                    onChange={(e) => {
                      setUseraddress(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="address-input-div">
                  <input
                    type="text"
                    placeholder="city"
                    value={usercity}
                    onChange={(e) => {
                      setUsercity(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="address-input">
                <div className="address-input-div">
                  <input
                    type="text"
                    placeholder="state"
                    value={userstate}
                  ></input>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      navigate("/payment");
                    }}
                    variant="outlined"
                    size="large"
                    style={{
                      color: "white",
                      backgroundColor: "#ff7900",
                      marginLeft: "10px",
                    }}
                  >
                    {" "}
                    Place Order
                  </Button>
                </div>
              </div>
              <div></div>
            </form>
          </div>
        </div>

        <div className="right-checkout-div">
          {" "}
          {Object.keys(cartdata).map((key, i) => {
            totalPrice = totalPrice + cartdata[key].price * cartdata[key].qty;
            totalQty = totalQty + cartdata[key].qty;
            return (
              <div className="total-cart-price">
                <div>{cartdata[key].name}</div>
                <div>
                  <img
                    src={`http://localhost:5000/api/product/image/getimage/${cartdata[key].img}`}
                  ></img>
                </div>
                <div>Quantity{cartdata[key].qty}</div>
                <div>
                  Price:
                  <FaRupeeSign style={{ color: "red" }} />
                  {cartdata[key].price}
                </div>
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
        </div>
      </div>
    </>
  );
};
