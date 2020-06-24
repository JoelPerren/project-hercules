import React, { createContext, useState, useEffect } from "react";
import { loadUserData } from "../utils/auth-client";
import FullPageSpinner from "../pages/FullPageSpinner";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function authenticateUser() {
      const refreshToken = Cookies.get("refresh_token");
      if (!refreshToken) {
        setLoading(false);
        return;
      }

      const response = await loadUserData(refreshToken);

      if (Object.keys(response).length === 0) {
        setLoading(false);
        return;
      }

      setUserData(response);
      setVerified(true);
      setLoading(false);
    }
    authenticateUser();
  }, []);

  if (loading) {
    return <FullPageSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        verified: verified,
        userData: userData,
        setVerified: setVerified,
        setUserData: setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
