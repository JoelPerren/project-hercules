import Cookies from 'js-cookie';
import api from './api-client';

async function authenticateByAccessToken(userDetails) {
  const { accessToken } = userDetails;
  let modifiedDetails;

  try {
    const response = await api(
      '/users/authenticate-with-access-token',
      'GET',
      null,
      true,
      accessToken,
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
    const response = await api('/users/authenticate-with-refresh-token', 'GET');

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
      refreshToken: Cookies.get('refreshToken'),
    };

    return modifiedDetails;
  } catch {
    return userDetails;
  }
}

async function authenticateUser(userDetails) {
  let modifiedDetails = userDetails;

  modifiedDetails.isAuthenticated = false;

  if (modifiedDetails.accessToken) {
    modifiedDetails = await authenticateByAccessToken(modifiedDetails);
  }

  if (!modifiedDetails.isAuthenticated && modifiedDetails.refreshToken) {
    modifiedDetails = await authenticateByRefreshToken(modifiedDetails);
  }

  if (!modifiedDetails.isAuthenticated) {
    modifiedDetails = {
      isAuthenticated: false,
      email: '',
      name: '',
      accessToken: null,
      refreshToken: null,
    };
  }

  return modifiedDetails;
}

function logout() {
  const userDetails = {
    isAuthenticated: false,
    email: '',
    name: '',
    accessToken: null,
    refreshToken: null,
  };

  Cookies.remove('refreshToken');
  return userDetails;
}

export { authenticateUser, logout };
