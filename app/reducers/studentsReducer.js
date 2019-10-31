// students sub-reducer
import axios from "axios";

// action types
const GOT_ALL_STUDENTS = "GOT_ALL_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";

// action creators
const gotAllStudents = students => {
  return {
    type: GOT_ALL_STUDENTS,
    students
  };
};

const createStudent = student => {
  return {
    type: CREATE_STUDENT,
    student
  };
};

// thunks
export const getAllStudents = () => async dispatch => {
  const { data } = await axios.get("/api/students");
  dispatch(gotAllStudents(data));
};

export const createStudentThunk = student => async dispatch => {
  const { data } = await axios.post("/api/students", student);
  dispatch(createStudent(data));
};

// reducer
const studentsReducer = (students = [], action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...students, action.student];
    default:
      return students;
  }
};

export default studentsReducer;
