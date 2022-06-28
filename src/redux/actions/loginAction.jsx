import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";
//import { LOGIN_FAILUTE } from "../constants";
//import { LOGIN_SUCCESS } from "../constants";
import axios from "axios";

export const loginUser = (data) => {
  console.log("login-data", data);
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    const res = await axios.post(
      "https://app-backend-cloud.herokuapp.com/api/user/login",
      {
        email: data.email,
        password: data.password,
      }
    );
    if (res.status == 201) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.message });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: res.data.message });
    }
  };
};
