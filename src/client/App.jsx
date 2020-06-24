import React, { useContext } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { verified } = useContext(AuthContext);

  return verified ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
