import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count > 5) {
      throw new Error("Manual Error");
    }
  }, [count]);

  return (
    <>
      <div>
        Count: {count}
      </div>
      <button onClick={handleClick}>Inc</button>
    </>
  );
};

export default Counter;
