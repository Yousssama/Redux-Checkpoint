
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Math.random(),
        description,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
