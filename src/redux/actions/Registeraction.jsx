import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants";
//import { LOGIN_FAILUTE } from "../constants";
//import { LOGIN_SUCCESS } from "../constants";
import axios from "axios";

export const registerUser = (data) => {
  console.log("login-data", data);
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    const res = await axios.post(
      "https://app-backend-cloud.herokuapp.com/api/user/register",
      {
        ...data,
      }
    );
    if (res.status == 201) {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
    } else {
      dispatch({ type: REGISTER_FAILURE, payload: res.data.message });
    }
  };
};
