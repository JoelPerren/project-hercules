import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AuthenticatedNavbar from "./components/navbar/AuthenticatedNavbar";

function AuthenticatedApp() {
  return (
    <>
      <Router>
        <AuthenticatedNavbar />
        <Dashboard />
      </Router>
    </>
  );
}

export default AuthenticatedApp;
