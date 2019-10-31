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
    </div>
  );
};

export default Campus;
