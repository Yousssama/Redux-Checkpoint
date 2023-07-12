
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleDone } from "../redux/actions";

const Task = ({ task }) => {
  const [editable, setEditable] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editable && description.trim()) {
      dispatch(editTask(task.id, description));
    }
    setEditable(!editable);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleDone(task.id))}
      />
      {editable ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <span className={task.isDone ? "done" : ""}>{task.description}</span>
      )}
      <button onClick={handleEdit}>{editable ? "Save" : "Edit"}</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
  );
};

export default Task;
