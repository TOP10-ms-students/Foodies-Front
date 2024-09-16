import { Modal, notification } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  const [notificationApi, notificationContext] = notification.useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const {
    isOpenLogin,
    isOpenSignUp,
    isOpenLogout,
    handleOpenSignUp,
    handleOpenLogin,
    handleOpenLogout,
    switchModals,
    handleCancel,
  } = useAuthModals();

  const isHomePage = location.pathname === "/";

  const handleCloseLogout = () => !isLoading && handleCancel();

  const handleLogout = () => {
    setIsLoading(true);

    return logout()
      .then(() => {
        dispatch(setUser(null));
        authTokenService.unset();
        handleCancel();
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
          <StyledLayoutHeader $isHomePage={isHomePage}>
            <LogoLink to={ROUTE_PATHS.HOME} $isHomePage={isHomePage}>
              foodies
            </LogoLink>

            {user ? (
              <>
                <HeaderNav isHomePage={isHomePage} />

                <UserBar
                  name={user.name}
                  avatarSrc={user.avatar}
                  handleOpenLogout={handleOpenLogout}
                  isHomePage={isHomePage}
                />
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
