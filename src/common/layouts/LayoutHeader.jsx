import { Modal, notification, Spin } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";

import { LoginForm } from "~/common/components/forms/LoginForm";
import { SignUpForm } from "~/common/components/forms/SignUpForm";

import { useAuthModals } from "~/common/hooks/useAuthModals";

import { authTokenService } from "~/api/ApiService";
import { logout } from "~/api/user";

import { getCurrentUser } from "~/store/selectors";
import { setUser } from "~/store/slices/auth";

import { PageContainer } from "./PageContainer";

const StyledLayoutHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LayoutHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  const [notificationApi, notificationContext] = notification.useNotification();

  const [isLoading, setIsLoading] = useState(false);
  const {
    isOpenLogin,
    isOpenSignUp,
    handleOpenSignUp,
    handleOpenLogin,
    switchModals,
    handleCancel,
  } = useAuthModals();

  const handleLogout = () => {
    setIsLoading(true);

    return logout()
      .then(() => {
        dispatch(setUser(null));
        authTokenService.unset();
        notificationApi.success({ message: "Logout successfull!" });
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
          <div>Header</div>

          {user ? (
            <div>
              {user.name}
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={handleOpenSignUp}>
                SignUp
              </button>
              <button type="button" onClick={handleOpenLogin}>
                Login
              </button>
            </div>
          )}
        </StyledLayoutHeader>
      </PageContainer>

      <Modal open={isOpenSignUp} onCancel={handleCancel} centered footer={null}>
        <SignUpForm onLinkClick={switchModals} onSuccess={handleCancel} />
      </Modal>
      <Modal open={isOpenLogin} onCancel={handleCancel} centered footer={null}>
        <LoginForm onLinkClick={switchModals} onSuccess={handleCancel} />
      </Modal>

      {isLoading && <Spin spinning fullscreen />}

      {notificationContext}
    </>
  );
};
