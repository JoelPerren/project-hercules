import api from "./api-client";

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

export { getUser, createUser };
