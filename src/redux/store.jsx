import { createStore,applyMiddleware,compose } from "redux";
import { rootReducers } from "./reducers/allReducers";
import thunk from'redux-thunk';
export const store = createStore(
  rootReducers,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
