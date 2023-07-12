
import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = () => {
    switch (filter) {
      case "done":
        return tasks.filter((task) => task.isDone);
      case "not":
        return tasks.filter((task) => !task.isDone);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <ul>
        {filteredTasks().map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
