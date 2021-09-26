import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { ApplicantProfilePage, FlatProfilePage, FrontPage } from "./pages";
import Matches from './pages/Matches'
import "./App.css";
import { Navbar } from "./components";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  return (
    <Router>
      <div className={"App"}>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route exact path={"/"} render={() => <FrontPage />} />
          <Route exact path={"/matches"} render={() => <Matches />} />
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
