import React, { useContext } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { userData } = useContext(AuthContext);

  return userData.authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
