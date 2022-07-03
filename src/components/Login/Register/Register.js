import React from "react";
import { useForm } from "react-hook-form";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { auth } from "../../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    if (data.password1 === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password1)
        .then(() => {
          console.log("Successfully created a user");
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
        sx={{ display: "block", my: ".5rem" }}
        align="center"
      />
      <TextField
        type="password"
        placeholder="password"
        {...register("password1", { required: true })}
        sx={{ display: "block", my: ".5rem" }}
        align="center"
      />
      <TextField
        type="password"
        placeholder="repeat password"
        {...register("password2", { required: true })}
        sx={{ display: "block", my: ".5rem" }}
        align="center"
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default Register;

// 1. Stworzyć na fb
// 2. Aktywować fb auth
// 3. Okodować formularz rejestracyjny
