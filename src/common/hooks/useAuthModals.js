import { useSelector, useDispatch } from "react-redux";

import {
  closeAuthModal,
  openLoginModal,
  openSignUpModal,
  openLogoutModal,
  switchAuthModal,
  AUTH_MODALS,
} from "~/store/slices/auth";

export const useAuthModals = () => {
  const dispatch = useDispatch();
  const currentOpen = useSelector((state) => state.auth.currentAuthModal);

  const handleOpenSignUp = () => {
    dispatch(openSignUpModal());
  };

  const handleOpenLogin = () => {
    dispatch(openLoginModal());
  };

  const handleOpenLogout = () => {
    dispatch(openLogoutModal());
  };

  const switchModals = () => {
    dispatch(switchAuthModal());
  };

  const handleCancel = () => {
    dispatch(closeAuthModal());
  };

  return {
    isOpenLogin: currentOpen === AUTH_MODALS.login,
    isOpenSignUp: currentOpen === AUTH_MODALS.signUp,
    isOpenLogout: currentOpen === AUTH_MODALS.logout,
    handleOpenSignUp,
    handleOpenLogin,
    handleOpenLogout,
    switchModals,
    handleCancel,
  };
};
