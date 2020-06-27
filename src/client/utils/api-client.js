import config from "./config";

function api(
  path,
  method = "GET",
  body = null,
  requiresAuth = false,
  credentials = null
) {
  const url = config.apiBaseUrl + path;

  const options = {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  if (requiresAuth) {
    options.headers["Authorization"] = credentials;
  }
  return fetch(url, options);
}

export default api;
