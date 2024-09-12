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

import { StyledLayoutHeader } from "./LayoutHeader.styled";

import { PageContainer } from "../PageContainer";
import UserBar from "./UserBar";
import HeaderNav from "./HeaderNav";
import AuthBar from "./AuthBar";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routing/constants";

export const LayoutHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  const [notificationApi, notificationContext] = notification.useNotification();

  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isUserPopUp, setIsUserPopUp] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);

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

  const switchDrawer = () => setIsDrawer(!isDrawer);

  const switchUserPopUp = () => setIsUserPopUp(!isUserPopUp);

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
        <StyledLayoutHeader>
          <Link to={ROUTE_PATHS.HOME}>foodies</Link>

          {user ? (
            <>
              <HeaderNav />

              <UserBar
                name={user.name}
                isDrawer={isDrawer}
                isUserPopUp={isUserPopUp}
                switchDrawer={switchDrawer}
                switchUserPopUp={switchUserPopUp}
                handleOpenLogout={handleOpenLogout}
              />
            </>
          ) : (
            <AuthBar
              isLoginActive={isLoginActive}
              handleOpenLogin={handleOpenLogin}
              handleOpenSignUp={handleOpenSignUp}
              setIsLoginActive={setIsLoginActive}
            />
          )}
        </StyledLayoutHeader>
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
        // eslint-disable-next-line prettier/prettier
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
