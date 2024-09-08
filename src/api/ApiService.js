import axios from "axios";

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

api.interceptors.request.use(onRequest);

export { api, authTokenService };
