import { combineReducers } from "redux";
import { loginReducers } from "./loginReducers";
import { registerReducers } from "./registerReducers";
import { productReducers } from "./productReducer";
import { cartReducers } from "./cartReducers";
export const rootReducers = combineReducers({
  login: loginReducers,
  register: registerReducers,
  product: productReducers,
  cart: cartReducers,
});
