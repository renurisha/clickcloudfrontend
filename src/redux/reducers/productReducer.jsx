//import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "../constants";
const init = {
  loading: false,
  product: [],
  error: false,
};
export const productReducers = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: [...payload],
        loading: false,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        product: [],
        error: true,
      };
    default:
      return state;
  }
};
