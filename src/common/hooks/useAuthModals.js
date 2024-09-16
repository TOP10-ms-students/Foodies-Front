import { useCallback } from "react";
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

  const handleOpenSignUp = useCallback(() => {
    dispatch(openSignUpModal());
  }, [dispatch]);

  const handleOpenLogin = useCallback(() => {
    dispatch(openLoginModal());
  }, [dispatch]);

  const handleOpenLogout = useCallback(() => {
    dispatch(openLogoutModal());
  }, [dispatch]);

  const switchModals = useCallback(() => {
    dispatch(switchAuthModal());
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

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
