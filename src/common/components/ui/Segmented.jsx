import { Segmented as AntdSegmented } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledSegmented = styled(AntdSegmented)`
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};

  .ant-segmented-item {
    letter-spacing: -0.02em;
    border-radius: 30px;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid transparent;
    text-transform: uppercase;

    padding: 9px 16px !important;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;

    @media ${({ theme }) => theme.media.tablet} {
    }

    @media ${({ theme }) => theme.media.desktop} {
      padding: 13px 28px !important;
      text-transform: uppercase;
      line-height: 24px;
    }
  }

  .ant-segmented-item-label {
    padding: 0;
    min-height: unset;
    line-height: inherit;
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
