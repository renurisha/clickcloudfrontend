import React, { useEffect } from "react";
import { productGet } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";
import { generatePublicUrl } from "../../UrlConfigs";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product);
  console.log("prod", product);
  //arr.push(product[0]);
  // console.log(arr);
  //if(product.length)
  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productGet());
  }, []);
  return (
    <div className="main-product-container">
      {product.map((e, i) => {
        return (
          <Link to={`/detailspage/${e._id}`} key={e._id}>
            <div className="productdiv" key={i}>
              <div className="productimg">
                <img
                  src={`http://localhost:5000/api/product/image/getimage/${e.pictures[0]}`}
                ></img>
              </div>
              <div className="productinfo">
                <div style={{ color: "red" }}>{e.name}</div>
                <div style={{ color: "blue" }}>
                  Ratings <b>{e.rating}</b>
                </div>
                <div>
                  price:<b>{e.price}</b>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
