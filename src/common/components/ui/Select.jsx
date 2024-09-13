import { Select as AntdSelect } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledSelect = styled(AntdSelect)`
  height: 56px !important;
  width: ${({ width }) => width || "auto"};

  .ant-select-selector {
    padding-left: 18px !important;
    padding-right: 18px !important;
    border-radius: 30px !important;
  }

  .ant-select-selection-placeholder,
  .ant-select-arrow {
    color: ${({ theme }) => theme.colors.black};
  }

  .ant-select-arrow {
    right: 18px;
  }

  .ant-select-selection-search > input {
    height: 54px !important;
  }

  .ant-select-clear {
    top: 25px;
    right: 46px;
    font-size: 20px;
  }
`;

export const Select = ({ width, ...props }) => (
  <StyledSelect {...props} width={width} size="large" />
);
