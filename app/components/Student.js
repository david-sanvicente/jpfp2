import React from "react";
import { Link } from "react-router-dom";

const Student = props => {
  return (
    <div className="student row">
      <div className="column">
        <Link to={`/students/${props.student.id}`}>
          {`${props.student.firstName} ${props.student.lastName}`}
        </Link>
      </div>
      <div className="delete button">
        <button
          className="delete student"
          onClick={() => props.deleteStudent(props.student.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Student;
