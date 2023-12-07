// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  todos: [],
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
