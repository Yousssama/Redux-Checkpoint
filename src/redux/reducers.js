
import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

export default rootReducer;
