import axios from "axios";

// action types
const GOT_SINGLE_STUDENT = "GOT_SINGLE_STUDENT";

// action creators
const gotSingleStudent = singleStudent => {
  return {
    type: GOT_SINGLE_STUDENT,
    singleStudent
  };
};

// thunks
export const getSingleStudent = id => async dispatch => {
  const { data } = await axios.get(`/api/students/${id}`);
  dispatch(gotSingleStudent(data));
};

export const updateStudentThunk = (studentId, student) => async dispatch => {
  await axios.put(`/api/students/${studentId}`, student);
  const { data } = await axios.get(`/api/students/${studentId}`);
  dispatch(gotSingleStudent(data));
};

// reducer
const singleStudentReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_SINGLE_STUDENT:
      return action.singleStudent;
    default:
      return state;
  }
};

export default singleStudentReducer;
