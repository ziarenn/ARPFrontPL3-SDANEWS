import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <h2>Don't have an account yet? Register now!</h2>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <ProfilePhotoForm />
    </>
  );
};

export default LoginPage;

// 1. Wszystko ma być obwinięte w Card
// 2. Wyrenderować LoginForm
// 3. Card
