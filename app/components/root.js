import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link style={{ color: "white" }} to="/campuses">
            Campuses
          </Link>
          <Link style={{ color: "white" }} to="/students">
            Students
          </Link>
          {/* <Link style={{ color: "white" }} to="/home">
            Home
          </Link> */}
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <Switch>
          <Route path="/campuses/:id" component={SingleCampus} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/campuses" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
