// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from "redux";
import campusesReducer from "./campusesReducer";
import studentsReducer from "./studentsReducer";

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer
});

export default rootReducer;
