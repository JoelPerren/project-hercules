import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { authenticateUser } from '../../utils/auth-client';
import FullPageSpinner from '../../pages/FullPageSpinner';

export const AuthContext = createContext(undefined, undefined);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isAuthenticated: true,
    email: 'test@test.com',
    name: 'Tester Extraordinaire',
    accessToken: null,
    refreshToken: Cookies.get('refreshToken'),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      if (!userData.isAuthenticated) {
        const response = await authenticateUser(userData);
        setUserData(response);
      }
    }
    fetchUserData()
      .then(() => setLoading(false));
  }, [userData]);

  if (loading) {
    return <FullPageSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
