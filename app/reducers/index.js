import { combineReducers } from "redux";
import campusesReducer from "./campusesReducer";
import studentsReducer from "./studentsReducer";
import singleCampusReducer from "./singleCampusReducer";
import singleStudentReducer from "./singleStudentReducer";

const rootReducer = combineReducers({
  campuses: campusesReducer,
  singleCampus: singleCampusReducer,
  students: studentsReducer,
  singleStudent: singleStudentReducer
});

export default rootReducer;
