import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h2>Register new account</h2>
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("password1", { required: true })}
      />
      <input
        type="password"
        placeholder="repeat password"
        {...register("password2", { required: true })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
