import React from "react";
import { Link } from "react-router-dom";

const Student = props => {
  return (
    <div>
      <Link to={`/students/${props.student.id}`}>
        {`${props.student.firstName} ${props.student.lastName}`}
      </Link>
    </div>
  );
};

export default Student;
