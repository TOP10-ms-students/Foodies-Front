import { createSlice } from "@reduxjs/toolkit";

export const AUTH_MODALS = {
  signUp: "signUp",
  login: "login",
  logout: "logout",
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
    updateUserAvatar: (state, action) => {
      state.user = { ...state.user, avatar: action.payload };
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
    openLogoutModal: (state) => {
      state.currentAuthModal = AUTH_MODALS.logout;
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
  updateUserAvatar,
  closeAuthModal,
  openLoginModal,
  openSignUpModal,
  openLogoutModal,
  switchAuthModal,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
