import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCampuses } from "../reducers/campusesReducer";
import Campus from "./Campus";

class AllCampuses extends Component {
  componentDidMount() {
    this.props.getAllCampuses();
  }

  render() {
    return (
      <div id="campuses">
        {this.props.campuses.map(campus => {
          return (
            <div key={campus.id}>
              <Campus campus={campus} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCampuses: () => dispatch(getAllCampuses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
