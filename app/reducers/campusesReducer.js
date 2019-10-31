// campuses sub-reducer
import axios from "axios";

// action types
const GOT_ALL_CAMPUSES = "GOT_ALL_CAMPUSES";
const CREATE_CAMPUS = "CREATE_CAMPUS";

// action creators
const gotAllCampuses = campuses => {
  return {
    type: GOT_ALL_CAMPUSES,
    campuses
  };
};

const createCampus = campus => {
  return {
    type: CREATE_CAMPUS,
    campus
  };
};

// thunks
export const getAllCampuses = () => async dispatch => {
  const { data } = await axios.get("/api/campuses");
  dispatch(gotAllCampuses(data));
};

export const createCampusThunk = campus => async dispatch => {
  const { data } = await axios.post("/api/campuses", campus);
  dispatch(createCampus(data));
};

// reducer
const campusesReducer = (campuses = [], action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...campuses, action.campus];
    default:
      return campuses;
  }
};

export default campusesReducer;
