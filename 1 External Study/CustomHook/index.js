import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return screenSize;
}

// --------------------

// import { useScreenSize } from "../../CommonFunctions/CommonFunctions";

// const screenSize = useScreenSize();
// const isMobile = screenSize < 960;

// ------------Example 2

import React, { useState } from 'react';

// Custom hook for managing a counter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

// Example usage of the custom hook
function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterComponent;

// Example 3

import { useEffect, useState } from "react";

function useLocalStorage() {
    const [name, setName] = useState(() => {
        const val = window.localStorage.getItem("name");
        return val ? val : "";
    });

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
