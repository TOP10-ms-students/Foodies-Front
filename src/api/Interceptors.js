import { ACCESS_TOKEN_KEY } from "constants/localStorage";

const onRequest = (config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
};

export const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest);
  return axiosInstance;
};
