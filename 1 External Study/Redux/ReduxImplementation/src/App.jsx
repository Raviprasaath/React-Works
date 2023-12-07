// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Components/Counter';
import store from './Components/Store';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;