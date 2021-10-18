import React from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ descripcion }, hadleInputChange, reset] = useForm({
    descripcion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desh: descripcion,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Add TO DO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="descripcion"
          className="form-control"
          placeholder="To do ..."
          autoComplete="off"
          value={descripcion}
          onChange={hadleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
