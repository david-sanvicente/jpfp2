import React, { Component } from "react";
import { getSingleStudent } from "../reducers/singleStudentReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleStudent(this.props.match.params.id);
  }

  render() {
    return (
      Object.keys(this.props.singleStudent) && (
        <div>
          <p>{`Full Name: ${this.props.singleStudent.firstName} ${this.props.singleStudent.lastName}`}</p>
          <p>{`email: ${this.props.singleStudent.email}`}</p>
          <p>
            <img src={this.props.singleStudent.imageUrl} />
          </p>
          <p>{`GPA: ${this.props.singleStudent.gpa}`}</p>
          <br />
          Enrolled Campus:
          <p>
            {this.props.singleStudent.campus &&
            this.props.singleStudent.campus.name ? (
              <p>
                {
                  <Link to={`/campuses/${this.props.singleStudent.campus.id}`}>
                    {this.props.singleStudent.campus.name}
                  </Link>
                }
              </p>
            ) : (
              "Student not presently enrolled."
            )}
          </p>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    singleStudent: state.singleStudent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleStudent: id => dispatch(getSingleStudent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
