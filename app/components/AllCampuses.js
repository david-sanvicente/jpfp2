import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCampuses, deleteCampus } from "../reducers/campusesReducer";
import Campus from "./Campus";
import NewCampusForm from "./NewCampusForm";

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
              <Campus campus={campus} deleteCampus={this.props.deleteCampus} />
            </div>
          );
        })}
        <NewCampusForm />
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
    getAllCampuses: () => dispatch(getAllCampuses()),
    deleteCampus: campusId => dispatch(deleteCampus(campusId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
