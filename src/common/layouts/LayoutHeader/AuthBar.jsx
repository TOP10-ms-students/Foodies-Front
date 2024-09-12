import React from "react";
import { UserAuthButtons } from "./LayoutHeader.styled";
import { Button } from "antd";

const AuthBar = ({
  isLoginActive = false,
  handleOpenLogin,
  handleOpenSignUp,
  setIsLoginActive,
}) => {
  return (
    <UserAuthButtons>
      <Button
        type={isLoginActive ? "primary" : "button"}
        onClick={() => {
          handleOpenLogin();
          setIsLoginActive(true);
        }}
      >
        SIGN IN
      </Button>
      <Button
        type={!isLoginActive ? "primary" : "button"}
        onClick={() => {
          handleOpenSignUp();
          setIsLoginActive(false);
        }}
      >
        SIGN UP
      </Button>
    </UserAuthButtons>
  );
};

export default AuthBar;
