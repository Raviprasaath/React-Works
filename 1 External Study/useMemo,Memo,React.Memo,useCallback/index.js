/*

React.memo:
 
Type: Higher-order component (HOC).
Purpose: It's used to memoize functional components.
Behavior: Wrapping a functional component with React.memo memoizes the result of rendering that component based on its props. It prevents unnecessary re-renders by shallowly comparing the previous and current props.

Example:

import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  console.log("Rendering MyComponent...");
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This component is memoized using React.memo.</p>
    </div>
  );
});

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>React.memo Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <MyComponent name="Alice" />
    </div>
  );
};

export default App;


-----------------------------------------------------------------------------------------------
memo (from React):

Type: Function.
Purpose: It's similar to React.memo, but it's used for class components instead of functional components.
Behavior: By wrapping a class component with memo, you can achieve similar memoization behavior as with React.memo. It will shallowly compare props and prevent re-renders if props remain the same.

class MyComponent extends React.Component {
  // Component logic
}
export default React.memo(MyComponent);


-----------------------------------------------------------------------------------------------
useMemo:

Type: Hook.
Purpose: It's used to memoize the result of a function or computation within a functional component.
Behavior: useMemo accepts a function and an array of dependencies. It will recompute the memoized value only when one of the dependencies has changed. This helps optimize expensive calculations or prevents unnecessary recalculations.

Example:

import React, { useState, useMemo } from 'react';

const MyComponent = () => {
  const [number, setNumber] = useState(0);

  // Expensive calculation function
  const expensiveCalculation = (num) => {
    console.log("Performing expensive calculation...");
    // Simulating an expensive calculation
    for (let i = 0; i < 1000000000; i++) {
      num += i;
    }
    return num;
  };

  // Memoized result of the expensive calculation
  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Number: {number}</p>
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>
        Increment Number
      </button>
      <p>Memoized Result: {memoizedResult}</p>
    </div>
  );
};

export default MyComponent;


-----------------------------------------------------------------------------------------------


useCallback:

Type: Hook.
Purpose: It's used to memoize callback functions to prevent unnecessary re-creation of callback references.
Behavior: useCallback returns a memoized callback function. It's useful when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders.
Example:

const memoizedCallback = useCallback(() => {
  // Callback logic
}, [dependency]);


*/