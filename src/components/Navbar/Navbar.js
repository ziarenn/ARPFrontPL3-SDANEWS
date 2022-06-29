import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <h1>SDA NEWS</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/search">
        <button>Search</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
