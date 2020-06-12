import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Cookies from "js-cookie";

const initialState = {
  authenticatedUser: Cookies.getJSON("authenticatedUser") || null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        authenticatedUser: state.authenticatedUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
