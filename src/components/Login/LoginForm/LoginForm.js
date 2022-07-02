import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const LoginForm = () => {
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
      <TextField
        variant="outlined"
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
        align="center"
        sx={{ display: "block", my: ".8rem" }}
      />
      <TextField
        variant="outlined"
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
        align="center"
        sx={{ display: "block", my: ".8rem" }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", mb: "1rem", mx: "auto" }}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;

// 1. Input => TextField
// 2. button => Button
