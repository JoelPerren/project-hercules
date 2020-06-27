import api from "./api-client";
import Cookies from "js-cookie";

async function authenticateUser(userDetails) {
  userDetails.isAuthenticated = false;

  if (userDetails.accessToken) {
    userDetails = await authenticateByAccessToken(userDetails);
  }

  if (!userDetails.isAuthenticated && userDetails.refreshToken) {
    userDetails = await authenticateByRefreshToken(userDetails);
  }

  if (!userDetails.isAuthenticated) {
    userDetails = {
      isAuthenticated: false,
      email: "",
      name: "",
      accessToken: null,
      refreshToken: null,
    };
  }

  return userDetails;
}

async function authenticateByAccessToken(userDetails) {
  const accessToken = userDetails.accessToken;
  let modifiedDetails;

  try {
    const response = await api(
      "/users/authenticate-with-access-token",
      "GET",
      null,
      true,
      accessToken
    );

    if (response.status !== 200) {
      return userDetails;
    }

    const jsonResponse = await response.json();

    modifiedDetails = {
      ...userDetails,
      isAuthenticated: true,
      email: jsonResponse.email,
      name: jsonResponse.name,
    };

    return modifiedDetails;
  } catch {
    return userDetails;
  }
}

async function authenticateByRefreshToken(userDetails) {
  let modifiedDetails;

  try {
    const response = await api("/users/authenticate-with-refresh-token", "GET");

    if (response.status !== 200) {
      return userDetails;
    }

    const jsonResponse = await response.json();

    modifiedDetails = {
      ...userDetails,
      isAuthenticated: true,
      email: jsonResponse.email,
      name: jsonResponse.name,
      accessToken: jsonResponse.accessToken,
      refreshToken: Cookies.get("refreshToken"),
    };

    return modifiedDetails;
  } catch {
    return userDetails;
  }
}

function logout() {
  const userDetails = {
    isAuthenticated: false,
    email: "",
    name: "",
    accessToken: null,
    refreshToken: null,
  };

  Cookies.remove("refreshToken");
  return userDetails;
}

export { authenticateUser, logout };
