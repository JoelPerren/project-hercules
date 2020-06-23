import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";

function UnauthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default UnauthenticatedApp;
