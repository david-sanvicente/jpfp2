import React from "react";
import { Link } from "react-router-dom";

const Campus = props => {
  return (
    <div className="campus row">
      <div className="column">
        <Link to={`/campuses/${props.campus.id}`}>
          {props.campus.name}
          <img src={props.campus.imageUrl} />
        </Link>
      </div>
      <div className="delete button">
        <button
          className="delete campus"
          onClick={() => props.deleteCampus(props.campus.id)}
        >
          Delete Campus
        </button>
      </div>
    </div>
  );
};

export default Campus;
