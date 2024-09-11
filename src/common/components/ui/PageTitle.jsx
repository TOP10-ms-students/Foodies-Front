import { Typography } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledPageTitle = styled(Typography.Title)`
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 40px;
    line-height: 44px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const PageTitle = ({ ...props }) => <StyledPageTitle {...props} />;
