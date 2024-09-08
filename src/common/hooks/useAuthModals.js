import { useState } from "react";

const MODALS = {
  signUp: "signUp",
  login: "login",
};

export const useAuthModals = () => {
  const [currentOpen, setCurrentOpen] = useState(null);

  const handleOpenSignUp = () => {
    setCurrentOpen(MODALS.signUp);
  };

  const handleOpenLogin = () => {
    setCurrentOpen(MODALS.login);
  };

  const switchModals = () => {
    setCurrentOpen((prev) =>
      prev && prev === MODALS.signUp ? MODALS.login : MODALS.signUp
    );
  };

  const handleCancel = () => {
    setCurrentOpen(null);
  };

  return {
    isOpenLogin: currentOpen === MODALS.login,
    isOpenSignUp: currentOpen === MODALS.signUp,
    handleOpenSignUp,
    handleOpenLogin,
    switchModals,
    handleCancel,
  };
};
