import api from "./api-client";
var jwtDecode = require("jwt-decode");

async function authenticateUser() {
  const token = localStorage.token;

  if (!token) {
    // return false;
    const response = await api("/users/login", "POST", {
      email: "test@test.com",
      password: "testpass",
    });

    if (response.status === 200) {
      const json = await response.json();
      localStorage.token = json.token;
      return true;
    } else {
      return false;
    }
  }

  const decoded = jwtDecode(token);
  if (decoded.exp > Date.now()) {
    localStorage.clear();
    return false;
  }

  return true;
}

async function getUser(username, password) {
  const response = await api(`/users`, "GET", null, true, {
    username,
    password,
  });
  if (response.status === 200) {
    return response.json().then((data) => data);
  } else if (response.status === 401) {
    return null;
  } else {
    // throw new Error();
  }
}

async function createUser(user) {
  const response = await api("/users", "POST", user);
  if (response.status === 201) {
    return [];
  } else if (response.status === 422) {
    return response.json().then((data) => {
      return data.errors;
    });
  } else {
    // throw new Error();
  }
}

export { authenticateUser, getUser, createUser };
