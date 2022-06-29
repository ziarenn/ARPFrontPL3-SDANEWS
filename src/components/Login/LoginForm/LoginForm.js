import React from "react";

const LoginForm = () => {
  return (
    <form>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
