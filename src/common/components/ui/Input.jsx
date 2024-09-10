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

const baseBorderlessInputStyles = css`
  ${baseInputStyles}

  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
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

const Input = ({ width, ...props }) => <StyledInput {...props} width={width} />;

const PasswordInput = ({ width, ...props }) => (
  <StyledPasswordInput {...props} width={width} />
);

const BorderlessInput = styled((props) => (
  <AntdInput {...props} variant="borderless" />
))`
  ${baseBorderlessInputStyles}
`;

const BorderlessTextarea = styled((props) => (
  <AntdInput.TextArea {...props} variant="borderless" />
))`
  ${baseBorderlessInputStyles}
`;

export { Input, PasswordInput, BorderlessInput, BorderlessTextarea };
