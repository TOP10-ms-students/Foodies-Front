// import { createSelector } from '@reduxjs/toolkit';
import { authTokenService } from "../api/ApiService.js";

export const getCurrentUser = (state) => state.auth.user;
export const getIsAuthenticated = (state) =>
  authTokenService.get() && Boolean(state.auth.user);
