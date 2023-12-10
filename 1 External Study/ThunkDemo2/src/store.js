import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers( {reducer} )

const thunkMiddleware = applyMiddleware(thunk);

export const store = createStore(reducers, {}, thunkMiddleware);


// Thunk is worked based on the call back function
// Saga worked based on the generator function
