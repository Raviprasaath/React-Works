// Counter.js
import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


// mapStateToProps: Maps the state from the Redux store to component props
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// mapDispatchToProps: Maps action creators to component props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
