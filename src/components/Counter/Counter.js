import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  //{ starterCounter }
  const clickHandler = () => {
    setCount(count + 1);
  };

  // button.addEventListener("click", clickHandler);

  return (
    <>
      {/* <span>{count}</span>

      <button onClick={clickHandler}>Add 1</button> */}
      <p>{props.counter}</p>
    </>
  );
};

export default Counter;
