import api from "./api-client";
import Cookies from "js-cookie";
var jwtDecode = require("jwt-decode");

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
  return userDetails;
}

async function authenticateByRefreshToken(userDetails) {
  return userDetails;
}

async function verifyAccessToken(token) {
  // const expiry = jwtDecode(userToken).exp;

  //   if (expiry < Date.now()) {
  //     localStorage.clear();
  //     return false;
  //   }
  return true;
}

async function issueAccessToken() {
  // try {
  //   const response = await api("/users/refresh_token", "POST");
  //   if (response.status === 200) {
  //     const jsonResponse = await response.json();
  //     return jsonResponse.token;
  //   } else {
  //     throw new Error("Couldn't issue JWT");
  //   }
  // } catch (err) {
  //   throw err;
  // }
}

function startRefreshTimer() {
  // setInterval(issueAccessToken(), 840000); // 14 minutes
}

async function getUserFromRefreshToken() {}

async function loadUserData(refreshToken) {
  let userData = {};
  try {
    const response = await api("/users/authenticate", "POST");

    if (response.status !== 200) {
      Cookies.remove("refresh_token");
      return userData;
    }

    const jsonResponse = await response.json();

    userData = {
      userName: jsonResponse.userName,
      email: jsonResponse.email,
      accessToken: jsonResponse.accessToken,
    };

    startRefreshTimer();
    return userData;
  } catch (err) {
    return userData;
  }
}

async function loginUser(username, password) {
  try {
    const response = await api(`/users/login`, "POST", {
      email: username,
      password: password,
    });
    if (response.status === 200) {
      const jsonResponse = await response.json();
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

async function registerUser(user) {
  const response = await api("/users/register", "POST", user);
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

export { loadUserData, loginUser, registerUser };
