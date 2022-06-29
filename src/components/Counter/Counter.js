import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.starterCounter);
  //{ starterCounter }
  const clickHandler = () => {
    setCount(count + 1);
    props.setCounter(count + 1);
  };

  // button.addEventListener("click", clickHandler);

  return (
    <>
      <span>{count}</span>
      <button onClick={clickHandler}>Add 1</button>
    </>
  );
};

export default Counter;
