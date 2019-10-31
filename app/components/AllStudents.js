import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStudents } from "../reducers/studentsReducer";
import Student from "./Student";
import { Link } from "react-router-dom";
import NewStudentForm from "./NewCampusForm";

class AllStudents extends Component {
  componentDidMount() {
    this.props.getAllStudents();
  }

  render() {
    return (
      <div>
        <h4>Current Students</h4>
        {this.props.students.map(student => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <Student student={student} />
              </Link>
            </div>
          );
        })}
        <NewStudentForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllStudents: () => dispatch(getAllStudents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
