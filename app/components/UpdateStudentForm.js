import React from "react";
import { connect } from "react-redux";
import { updateStudentThunk } from "../reducers/singleStudentReducer";

class UpdateStudentForm extends React.Component {
  constructor() {
    super();

    (this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: ""
    }),
      (this.handleSubmit = this.handleSubmit.bind(this));
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      this.props.updateStudentThunk(this.props.studentId, this.state);
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div id="container">
        <h4>Update Student Information:</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            defaultValue={""}
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            defaultValue={""}
          />
          <br />
          <label htmlFor="email">email:</label>
          <input
            type="text"
            name="email"
            value={this.state.description}
            onChange={this.handleChange}
            defaultValue={""}
          />
          <br />
          <label htmlFor="imageUrl">Image Url:</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            defaultValue={""}
          />
          <br />
          <label htmlFor="gpa">GPA:</label>
          <input
            type="text"
            name="gpa"
            value={this.state.gpa}
            onChange={this.handleChange}
            defaultValue={""}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStudentThunk: (studentId, student) =>
      dispatch(updateStudentThunk(studentId, student))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateStudentForm);
