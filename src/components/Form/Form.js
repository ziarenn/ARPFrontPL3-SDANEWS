import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Form = ({ setKeyword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    setKeyword(data.keyword);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField
        type="text"
        align="center"
        placeholder="Keyword"
        {...register("keyword", { required: true })}
        sx={{ my: ".5rem", display: "block" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default Form;

// 1. Użyj zwykłego tagu form
// 2. TextField
// 3. Button
