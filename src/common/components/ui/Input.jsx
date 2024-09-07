import { Input as AntdInput } from "antd";
import React from "react";
import { styled, css } from "styled-components";

const baseInputStyles = css`
  height: 56px !important;
  width: ${({ width }) => width || "auto"};
  border-radius: 28px;
  padding-left: 14px;
  padding-right: 14px;
`;

const StyledInput = styled(AntdInput)`
  ${baseInputStyles}
`;

const StyledPasswordInput = styled(AntdInput.Password)`
  ${baseInputStyles}

  .ant-input-suffix svg {
    width: 18px;
    height: 18px;
  }
`;

export const Input = ({ width, ...props }) => (
  <StyledInput {...props} width={width} />
);

export const PasswordInput = ({ width, ...props }) => (
  <StyledPasswordInput {...props} width={width} />
);
