import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApplicantProfile from "./pages/ApplicantProfile";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <div className={"App"}>
        <Switch>
          <Route exact path={"/user/:id"} render={() => <ApplicantProfile />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
