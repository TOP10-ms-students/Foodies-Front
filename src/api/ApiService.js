import axios from "axios";
import { store } from "~/store";
import { logout } from "~/store/slices/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

const authTokenService = {
  set(token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  unset() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
  get() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
};

const onRequest = (config) => {
  const accessToken = authTokenService.get();

  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
};

/**
 * handle authorization error
 * this probably should be in some sort of
 * redux-thunk but all the code already written
 * so we doing so through axios interceptor
 */

const onErrorResponse = (error) => {
  if (error.response && error.response.status === 401) {
    store.dispatch(logout());
    authTokenService.unset();
  }
  return Promise.reject(error);
};

api.interceptors.request.use(onRequest);

api.interceptors.response.use((res) => res, onErrorResponse);

export { api, authTokenService };
