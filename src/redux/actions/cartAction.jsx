import { ADD_TO_CART } from "../constants";
//import { rootReducers } from "../reducers/allReducer";
//import { UPDATE_CART } from "../constants";
//const store = rootReducers();
import {store} from '../store'

export const addToCart = (product) => {
  return (dispatch) => {
    console.log("prodcart", product);
    const { cartItems } = store.getState().cart;
    console.log("cartitems", cartItems);
    console.log(cartItems);
    const qty = cartItems[product._id] ? cartItems[product._id].qty + 1 : 1;
    cartItems[product._id] = { ...product, qty };
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
  };
};

export const updateCart = () => {
  return (dispatch) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    if (cart) {
      console.log("update", cart);
      dispatch({ type: ADD_TO_CART, payload: { cartItems: cart } });
    }
  };
};
