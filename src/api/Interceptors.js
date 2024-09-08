import { authTokenService } from "./ApiService";

const onRequest = (config) => {
  const accessToken = authTokenService.get();

  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
};

export const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest);
  return axiosInstance;
};
