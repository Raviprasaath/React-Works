import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReduxer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;