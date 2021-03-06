import axios from "axios";

// action types
const GOT_SINGLE_CAMPUS = "GOT_SINGLE_CAMPUS";

// action creators
const gotSingleCampus = singleCampus => {
  return {
    type: GOT_SINGLE_CAMPUS,
    singleCampus
  };
};

// thunks
export const getSingleCampus = id => async dispatch => {
  const { data } = await axios.get(`/api/campuses/${id}`);
  dispatch(gotSingleCampus(data));
};

export const updateCampusThunk = (campusId, campus) => async dispatch => {
  await axios.put(`/api/campuses/${campusId}`, campus);
  const { data } = await axios.get(`/api/campuses/${campusId}`);
  dispatch(gotSingleCampus(data));
};

// reducer
const singleCampusReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_SINGLE_CAMPUS:
      return action.singleCampus;
    default:
      return state;
  }
};

export default singleCampusReducer;
