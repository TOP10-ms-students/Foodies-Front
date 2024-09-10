import { Breadcrumb as AntdBreadcrumb } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledBreadcrumb = styled(AntdBreadcrumb)`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

export const Breadcrumb = ({ ...props }) => <StyledBreadcrumb {...props} />;
