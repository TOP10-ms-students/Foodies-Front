import { authTokenService } from "../api/ApiService.js";

// auth

export const getCurrentUser = (state) => state.auth.user;
export const getIsAuthenticated = (state) =>
  authTokenService.get() && Boolean(state.auth.user);

// options

export const getAreas = (state) => state.options.areas;

export const getCategories = (state) => state.options.categories;
