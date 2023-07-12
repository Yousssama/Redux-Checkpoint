
import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Task from "./components/Task";

const App = () => {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
