import React, { useState, createContext } from "react";

const AuthContext = createContext();

function AuthProvider() {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  return <div></div>;
}

export default AuthProvider;
