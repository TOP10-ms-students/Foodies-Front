import { api } from "./ApiService";

export const signUp = (data) => api.post("auth/signup", data);

export const login = (data) => api.post("auth/login", data);

export const logout = () => api.post("auth/logout");

export const getCurrentUser = () => api.get("users/current");

export const getUserFollowers = (userId, params) =>
  api.get(`users/${userId}/followers`, { params });

export const getUserFollowing = (params) =>
  api.get("users/following", { params });

export const getUserById = (userId) => api.get(`users/${userId}`);
