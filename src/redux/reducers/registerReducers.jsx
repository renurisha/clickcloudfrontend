import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants";
const init = {
  loading: false,
  user:[],
  error: false,
};
export const registerReducers = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user:[{...payload}],
        loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        user: [],
        error: true,
      };
    default:
      return state;
  }
};
