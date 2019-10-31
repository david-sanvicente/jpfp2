import React from "react";
import { connect } from "react-redux";
import { createCampusThunk } from "../reducers/campusesReducer";

class NewCampusForm extends React.Component {
  constructor() {
    super();

    (this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: ""
    }),
      (this.handleSubmit = this.handleSubmit.bind(this));
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      this.props.createCampusThunk(this.state);
    } catch (err) {
      console.error(err);
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
        <h4>Form to create new campus:</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="imageUrl">Image Url:</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCampusThunk: campus => dispatch(createCampusThunk(campus))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewCampusForm);
