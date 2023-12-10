import { combineReducers, createStore } from 'redux';
import reducer from './reducer';

const reducers = combineReducers( {reducer} )

export const store = createStore(reducers, {});
