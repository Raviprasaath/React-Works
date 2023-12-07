import React, { useState, useCallback } from 'react';

const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent rendered');
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  // const handleClick = () => {
  //   console.log('Button clicked');
  //   setCount(count + 1);
  // };

  // With useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]);

  console.log('ParentComponent rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
