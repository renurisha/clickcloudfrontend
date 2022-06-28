import axios from "axios";
import { ADD_TO_DETAILSPAGE, ADD_TO_DETAILSPAGE_REQUEST } from "../constants";

export const detailsFun = (data) => {
  console.log("id", data);
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:5000/api/product/detailspage/${data}`);
    if (res.status == 201) {
      const { product } = res.data;
      console.log("resDetails", product);

      dispatch({ type: ADD_TO_DETAILSPAGE, payload: product });
    } else {
      console.log("error", "error");
    }
  };
};
