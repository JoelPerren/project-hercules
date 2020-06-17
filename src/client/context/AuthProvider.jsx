import React, { createContext, useState, useEffect } from "react";
import { authenticateUser } from "../utils/auth-client";
import FullPageSpinner from "../pages/FullPageSpinner";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider
      value={{
        authenticatedUser: data,
        setAuthenticatedUser: setData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
