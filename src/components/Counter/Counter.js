import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>
  );
};

export default Counter;
