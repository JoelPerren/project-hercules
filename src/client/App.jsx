import React, { useContext } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { AuthContext } from './context/auth/AuthProvider';

const App = () => {
  const { userData } = useContext(AuthContext);

  return userData.isAuthenticated ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
};

export default App;
