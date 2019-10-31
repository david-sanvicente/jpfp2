// import { combineReducers } from "redux";
// import campusesReducer from "./campusesReducer";
// import studentsReducer from "./studentsReducer";
// import singleCampusReducer from "./singleCampusReducer";
// import singleStudentReducer from "./singleStudentReducer";

// const rootReducer = combineReducers({
//   campuses: campusesReducer,
//   students: studentsReducer,
//   singleCampus: singleCampusReducer,
//   singleStudent: singleStudentReducer
// });

// export default rootReducer;

// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

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
