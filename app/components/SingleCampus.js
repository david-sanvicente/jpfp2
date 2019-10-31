import React, { Component } from "react";
import { getSingleCampus } from "../reducers/singleCampusReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleCampus(this.props.match.params.id);
  }

  render() {
    return (
      Object.keys(this.props.singleCampus) && (
        <div>
          <p>{`Campus: ${this.props.singleCampus.name}`}</p>
          <img src={this.props.singleCampus.imageUrl} />
          <p>{`Address: ${this.props.singleCampus.address}`}</p>
          <p>{`Description: ${this.props.singleCampus.description}`}</p>
          <p>Currently Enrolled Students:</p>
          <ul>
            {this.props.singleCampus.students &&
              this.props.singleCampus.students.map(student => {
                return (
                  <ul key={student.id}>
                    <Link to={`/students/${student.id}`}>
                      {`${student.firstName} ${student.lastName}`}
                      <img src={student.imageUrl} />
                    </Link>
                  </ul>
                );
              })}
          </ul>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    singleCampus: state.singleCampus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleCampus: id => dispatch(getSingleCampus(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
