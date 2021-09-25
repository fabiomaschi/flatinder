import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { ApplicantProfilePage, FlatProfilePage, FrontPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className={"App"}>
        <Switch>
          <Route exact path={"/"} render={() => <FrontPage />} />
          <Route
            exact
            path={"/user/:id"}
            render={() => <ApplicantProfilePage />}
          />
          <Route exact path={"/flat/:id"} render={() => <FlatProfilePage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
