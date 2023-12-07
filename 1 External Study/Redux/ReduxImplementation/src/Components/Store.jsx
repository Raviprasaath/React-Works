// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  counter: 0,
};

// Reducer function

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
