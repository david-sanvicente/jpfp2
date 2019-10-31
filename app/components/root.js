import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import NewStudentForm from "./NewStudentForm";
import NewCampusForm from "./NewCampusForm";

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
          <Route path="/newstudent" component={NewStudentForm} />
          <Route path="/newcampus" component={NewCampusForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
