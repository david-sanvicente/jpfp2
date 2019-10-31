import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStudents, deleteStudent } from "../reducers/studentsReducer";
import Student from "./Student";
import { Link } from "react-router-dom";
import NewStudentForm from "./NewStudentForm";

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
              {/* <Link to={`/students/${student.id}`}>
                <Student
                  student={student}
                  deleteStudent={this.props.deleteStudent}
                />
              </Link> */}
              <Student
                student={student}
                deleteStudent={this.props.deleteStudent}
              />
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
    getAllStudents: () => dispatch(getAllStudents()),
    deleteStudent: studentId => dispatch(deleteStudent(studentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
