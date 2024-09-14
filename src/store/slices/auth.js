import { createSlice } from "@reduxjs/toolkit";

export const AUTH_MODALS = {
  signUp: "signUp",
  login: "login",
};

const initialState = {
  user: null,
  currentAuthModal: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    closeAuthModal: (state) => {
      state.currentAuthModal = null;
    },
    openLoginModal: (state) => {
      state.currentAuthModal = AUTH_MODALS.login;
    },
    openSignUpModal: (state) => {
      state.currentAuthModal = AUTH_MODALS.signUp;
    },
    switchAuthModal: (state) => {
      state.currentAuthModal =
        state.currentAuthModal === "login" ? "signUp" : "login";
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  setUser,
  closeAuthModal,
  openLoginModal,
  openSignUpModal,
  switchAuthModal,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
