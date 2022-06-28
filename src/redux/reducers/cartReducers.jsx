import { ADD_TO_CART } from "../constants";
const init = {
  cartItems: {},
};

export const cartReducers = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      console.log("carttttttt", payload);
      return {
        ...state,
        cartItems: { ...payload.cartItems },
      };
    default:
      return state;
  }
};
