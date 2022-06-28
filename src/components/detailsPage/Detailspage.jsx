import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/actions/cartAction";

import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

import "./detailspage.css";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Detailspage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  // console.log("id", id);
  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/product/getProductbyid/${id}`)
      .then((res) => {
        console.log("details", res.data);
        setDetails([res.data.product]);
      })
      .catch((e) => {
        console.log("error");
      });
  }, []);
  return (
    <div>
      {details.map((product, i) => {
        return (
          <div>
            <div className="topdetailsdiv">
              <div className="side-images">
                {product.pictures.map((e, i) => {
                  return (
                    <div>
                      {" "}
                      <img
                        src={`http://localhost:5000/api/product/image/getimage/${e}`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="middle-image">
                <img
                  src={`http://localhost:5000/api/product/image/getimage/${product.pictures[0]}`}
                  alt=""
                />
              </div>
              <div className="info-div">
                <div>{product.name}</div>
                <div className="center-text">
                  <b>Price:</b>
                  <span style={{ color: "red" }}>
                    <b>
                      <FaRupeeSign style={{ color: "red" }} />
                      {product.price}
                    </b>
                  </span>
                </div>
                <div className="center-text">
                  <span>
                    <b>Ratings: {product.rating}</b>{" "}
                    <BsFillStarFill style={{ color: "#ff7900" }} />
                    <BsFillStarFill style={{ color: "#ff7900" }} />
                    <BsFillStarFill style={{ color: "#ff7900" }} />
                    <FaRegStar style={{ color: "#ff7900" }} />
                    <FaRegStar style={{ color: "#ff7900" }} />
                  </span>
                </div>
                <div className="description">
                  <b>Description:</b> <br />
                  Birde Presents to You Elegant and Quality Footwear for men
                  Made Of Best Quality Material Which Is Durable and Comfortable
                  to Wear Birde Offers You a Variety of Designs and Styles with
                  Unique Straps and Soles. These stylish shoes are the perfect
                  inspiration for a fashionable look. The comfortable sole makes
                  sure that your feet stay comfortable throughout the day and
                  you enjoy optimal Grip. Designed to offer comfort at its best,
                  without compromising on style. Birde is committed to deliver
                  the finest shoes ever made. Converting designs and ideas into
                  masterpiece is the work of Birde.
                </div>
              </div>
            </div>
            <div className="bottomdetailsdiv">
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const { _id, name, price } = product;
                  const img = product.pictures[0];
                  dispatch(addToCart({ _id, name, price, img }));
                }}
              >
                ADD TO CART
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Buy now
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
