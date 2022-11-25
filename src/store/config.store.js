import { combineReducers, createStore } from "redux";
import { inputReducer } from "./reducers/inputReducer";

const rootReducer = combineReducers({
  inputReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
