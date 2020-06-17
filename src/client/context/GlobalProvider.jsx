import React, { createContext, useState, useEffect } from "react";
import { authenticateUser } from "../utils/auth-client";
import FullPageSpinner from "../pages/FullPageSpinner";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await authenticateUser();
      setData(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <FullPageSpinner />;
  }

  return (
    <GlobalContext.Provider
      value={{
        authenticatedUser: data,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
