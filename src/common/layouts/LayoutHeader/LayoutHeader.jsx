import { Modal, notification } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { LogoutModalContent } from "~/common/components/custom/LogoutModalContent";
import { LoginForm } from "~/common/components/forms/LoginForm";
import { SignUpForm } from "~/common/components/forms/SignUpForm";

import { useAuthModals } from "~/common/hooks/useAuthModals";

import { authTokenService } from "~/api/ApiService";
import { logout } from "~/api/user";

import { getCurrentUser } from "~/store/selectors";
import { setUser } from "~/store/slices/auth";

import { ROUTE_PATHS } from "~/routing/constants";

import { PageContainer } from "../PageContainer";
import { AuthBar } from "./AuthBar";
import HeaderNav from "./HeaderNav";
import {
  StyledLayoutHeader,
  FixedHeader,
  LogoLink,
} from "./LayoutHeader.styled";
import UserBar from "./UserBar";

export const LayoutHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  const [notificationApi, notificationContext] = notification.useNotification();

  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isOpenLogin,
    isOpenSignUp,
    handleOpenSignUp,
    handleOpenLogin,
    switchModals,
    handleCancel,
  } = useAuthModals();

  const handleOpenLogout = () => setIsOpenLogout(true);

  const handleCloseLogout = () => !isLoading && setIsOpenLogout(false);

  const handleLogout = () => {
    setIsLoading(true);

    return logout()
      .then(() => {
        dispatch(setUser(null));
        authTokenService.unset();
        setIsOpenLogout();
        notificationApi.success({ message: "Logout successful!" });
      })
      .catch(() => {
        notificationApi.error({ message: "Something went wrong" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <PageContainer>
        <FixedHeader>
          <StyledLayoutHeader>
            <LogoLink to={ROUTE_PATHS.HOME}>foodies</LogoLink>

            {user ? (
              <>
                <HeaderNav />

                <UserBar name={user.name} handleOpenLogout={handleOpenLogout} />
              </>
            ) : (
              <AuthBar
                handleOpenLogin={handleOpenLogin}
                handleOpenSignUp={handleOpenSignUp}
              />
            )}
          </StyledLayoutHeader>
        </FixedHeader>
      </PageContainer>

      <Modal open={isOpenSignUp} onCancel={handleCancel} centered footer={null}>
        <SignUpForm onLinkClick={switchModals} onSuccess={handleCancel} />
      </Modal>

      <Modal open={isOpenLogin} onCancel={handleCancel} centered footer={null}>
        <LoginForm onLinkClick={switchModals} onSuccess={handleCancel} />
      </Modal>

      <Modal
        open={isOpenLogout}
        onCancel={handleCloseLogout}
        centered
        closable={!isLoading}
        footer={null}
      >
        <LogoutModalContent
          isLoading={isLoading}
          onLogout={handleLogout}
          onCancel={handleCloseLogout}
        />
      </Modal>

      {notificationContext}
    </>
  );
};
