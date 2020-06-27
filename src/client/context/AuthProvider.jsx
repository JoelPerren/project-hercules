import React, { createContext, useState, useEffect } from "react";
import { authenticateUser } from "../utils/auth-client";
import FullPageSpinner from "../pages/FullPageSpinner";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isAuthenticated: false,
    email: "",
    name: "",
    accessToken: null,
    refreshToken: Cookies.get("refreshToken"),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      if (!userData.isAuthenticated) {
        const response = await authenticateUser(userData);
        setUserData(response);
      }

      setLoading(false);
    }
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <FullPageSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        userData: userData,
        setUserData: setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
