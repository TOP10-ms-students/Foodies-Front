import React from "react";

import { StyledAuthBar, StyledAuthButton } from "./LayoutHeader.styled";

export const AuthBar = ({ handleOpenLogin, handleOpenSignUp }) => (
  <StyledAuthBar>
    <StyledAuthButton type="text" onClick={handleOpenLogin}>
      Login
    </StyledAuthButton>
    <StyledAuthButton type="primary" onClick={handleOpenSignUp}>
      Sign up
    </StyledAuthButton>
  </StyledAuthBar>
);
