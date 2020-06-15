import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
// import { createUser, getUser } from "./utils/auth-client";

// import { GlobalContext } from "./data/GlobalProvider";

const App = () => {
  // const context = useContext(GlobalContext);

  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;
