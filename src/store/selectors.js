// import { createSelector } from '@reduxjs/toolkit';

export const getCurrentUser = (state) => state.auth.user;
export const getIsAuthenticated = (state) => Boolean(state.auth.user);
