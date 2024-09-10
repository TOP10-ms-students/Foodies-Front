import { Typography } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledPageSubtitle = styled(Typography.Paragraph)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.darkgray};
`;

export const PageSubtitle = ({ ...props }) => <StyledPageSubtitle {...props} />;
