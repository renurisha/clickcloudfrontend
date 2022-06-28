import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "../constants";
//import { LOGIN_FAILUTE } from "../constants";
//import { LOGIN_SUCCESS } from "../constants";
import axios from "axios";

export const productGet = () => {
 
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const res = await axios.post(
      "http://localhost:5000/api/product/getProduct"
    );
    if (res.status == 201) {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.product });
    } else {
      dispatch({ type: GET_PRODUCT_FAILURE, payload: res.data.message });
    }
  };
};
