import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

function AuthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route path="/test">TEST</Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default AuthenticatedApp;
