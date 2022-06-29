import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <h1>SDA NEWS</h1>
      <button>Home</button>
      <button>Search</button>
      <button>Login</button>
      <button onClick={() => props.setCounter(props.counter + 1)}>+1</button>
      <span>{props.counter}</span>
    </nav>
  );
};

export default Navbar;
