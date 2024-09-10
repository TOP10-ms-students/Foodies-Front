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
`;

export const PageTitle = ({ ...props }) => <StyledPageTitle {...props} />;
