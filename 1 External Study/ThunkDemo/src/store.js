import { combineReducers, createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk'


const reducers = combineReducers({
  reducer
});

const thunkMiddleware = applyMiddleware(thunk);

export const store = createStore(reducers, {}, thunkMiddleware)
