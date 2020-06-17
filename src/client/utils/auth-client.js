import api from "./api-client";
var jwtDecode = require("jwt-decode");

async function authenticateUser() {
  try {
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      return false;
    }

    const expiry = jwtDecode(userToken).exp;

    if (expiry < Date.now()) {
      localStorage.clear();
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

async function loginUser(username, password) {
  const response = await api(`/users/login`, "POST", {
    email: username,
    password: password,
  });
  if (response.status === 200) {
    const json = await response.json();
    console.log(json);
    localStorage.setItem("userToken", json.token);
    return json;
  } else if (response.status === 401) {
    return null;
  } else {
    return null;
  }
}

async function registerUser(user) {
  const response = await api("/users/register", "POST", user);
  if (response.status === 201) {
    return [];
  } else if (response.status === 422) {
    return response.json().then((data) => {
      return data.errors;
    });
  }
}

export { authenticateUser, loginUser, registerUser };
