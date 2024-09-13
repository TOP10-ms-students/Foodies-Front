import { api } from "./ApiService";

export const signUp = (data) => api.post("auth/signup", data);

export const login = (data) => api.post("auth/login", data);

export const getCurrentUser = () => api.get("auth/current");

export const logout = () => api.post("auth/logout");

export const getUserFollowers = (userId) =>
  api.get(`users/${userId}/followers`);

export const getUserFollowing = () => api.get("users/following");
