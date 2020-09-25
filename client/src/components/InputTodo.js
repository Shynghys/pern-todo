import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const InputTodo = () => {
  const { register, handleSubmit, errors } = useForm();
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");

  const onSubmitForm = async (e) => {
    // e.preventDefault();
    try {
      const body = { description, username };

      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className=" mt-5" onSubmit={handleSubmit(onSubmitForm)}>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          placeholder="username"
          ref={register({ required: true, maxLength: 20, minLength: 5 })}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username?.type === "required" && "Your input is required"}
        {errors.username?.type === "maxLength" && "Your input exceed maxLength"}
        {errors.username?.type === "minLength" &&
          "Input should be atleast 5 symbols"}
        <input
          type="text"
          className="form-control"
          placeholder="description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
