import React, { createContext, useState, useEffect } from "react";
import { loadUserData } from "../utils/auth-client";
import FullPageSpinner from "../pages/FullPageSpinner";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isAuthenticated: false,
    email: "",
    name: "",
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: Cookies.get("refreshToken"),
  });
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
        userData: userData,
        setUserData: setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
