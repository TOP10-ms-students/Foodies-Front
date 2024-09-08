import { Segmented as AntdSegmented } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledSegmented = styled(AntdSegmented)`
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};

  .ant-segmented-item {
    padding: 16px 32px !important;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.02em;
    border-radius: 30px;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid transparent;
  }

  .ant-segmented-item-selected,
  .ant-segmented-thumb {
    background-color: ${({ theme }) => theme.colors.darkgray};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 30px;
  }
`;

export const Segmented = ({ ...props }) => <StyledSegmented {...props} />;
