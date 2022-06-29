import React from "react";

const Register = () => {
  return (
    <form>
      <h2>Register new account</h2>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="repeat password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
