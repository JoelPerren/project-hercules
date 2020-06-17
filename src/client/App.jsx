import React, { useContext } from "react";
import LandingPage from "./pages/LandingPage";
import AuthenticatedApp from "./pages/AuthenticatedApp";
// import { createUser, getUser } from "./utils/auth-client";

import { GlobalContext } from "./context/GlobalProvider";

const App = () => {
  const context = useContext(GlobalContext);

  return context.authenticatedUser ? <AuthenticatedApp /> : <LandingPage />;
};

export default App;
