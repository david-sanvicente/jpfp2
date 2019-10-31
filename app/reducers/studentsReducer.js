// students sub-reducer
import axios from "axios";

// action types
const GOT_ALL_STUDENTS = "GOT_ALL_STUDENTS";

// action creators
const gotAllStudents = students => {
  return {
    type: GOT_ALL_STUDENTS,
    students
  };
};

// thunks
export const getAllStudents = () => async dispatch => {
  const { data } = await axios.get("/api/students");
  dispatch(gotAllStudents(data));
};

// reducer
const studentsReducer = (students = [], action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return action.students;
    default:
      return students;
  }
};

export default studentsReducer;
