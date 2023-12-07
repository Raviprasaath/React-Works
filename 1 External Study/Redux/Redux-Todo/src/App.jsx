// App.js
import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './Components/TodoList';
import store from './Components/Store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Todo List App</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
