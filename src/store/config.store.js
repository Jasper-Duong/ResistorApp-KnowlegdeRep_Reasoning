import { combineReducers, createStore } from "redux";
import { inputReducer } from "./reducers/inputReducer";
import { outputReducer } from "./reducers/outputReducer";
import { resistorsReducer } from "./reducers/resistorsReducer";

const rootReducer = combineReducers({
  inputReducer,
  resistorsReducer,
  outputReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
