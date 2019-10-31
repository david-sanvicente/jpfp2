import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AllCampuses from "./AllCampuses";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link style={{ color: "white" }} to="/campuses">
            Campuses
          </Link>
          {/* <Link style={{ color: 'white' }} to='/campuses'>
            Students
          </Link>
          <Link style={{ color: 'white' }} to='/campuses'>
            Home
          </Link> */}
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <Switch>
          <Route path="/campuses" component={AllCampuses} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
