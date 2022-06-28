import React, { useEffect, useState } from "react";

import { FaRupeeSign } from "react-icons/fa";
import Button from "@mui/material/Button";
import "../checkout/checkout.css";
import "./payment.css";

import { useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

import { HashRouter, useNavigate } from "react-router-dom";

import GooglePayButton from "@google-pay/button-react";

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart);
  console.log("dataCart", data.cartItems);
  const auth = useSelector((state) => state.authreducers);
  

  const [cartdata, setCartdata] = useState({ ...data.cartItems });

  var totalPrice = 0;
  var totalQty = 0;
  console.log("cart..cart", { cartdata });

  useEffect(() => {
    dispatch(updateCart());
  }, []);

  return (
    <>
      <div className="checkout-container">
        <div className="left-checkout-div">
          <div>
            <div>
              <h3>PAY WITH GOOGLE</h3>
            </div>

            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: "12345678901234567890",
                  merchantName: "Demo Merchant",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: "100.00",
                  currencyCode: "USD",
                  countryCode: "US",
                },
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log("load payment data", paymentRequest);
              }}
            />
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
