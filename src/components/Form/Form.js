import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
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
      <input
        type="text"
        placeholder="Keyword"
        {...register("keyword", { required: true })}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
