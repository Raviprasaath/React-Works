import React from 'react';

// Regular functional component
const MyComponent = ({ value }) => {
  console.log('Component rendered');
  return <p>{value}</p>;
};

// Memoized component using React.memo
const MemoizedComponent = React.memo(MyComponent);

// Parent component
const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedComponent value={count} />
    </div>
  );
};

export default ParentComponent;