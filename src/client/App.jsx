import React, { useContext } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { authenticatedUser } = useContext(AuthContext);

  return authenticatedUser ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
