import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  userData: userReducer,
});

export default rootReducers;
