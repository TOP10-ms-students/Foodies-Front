import { Tabs as AntdTabs } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledTabs = styled(AntdTabs)`
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  .ant-tabs-ink-bar {
    height: 3px !important;
  }

  margin: 0 auto;
  max-width: calc(100vw - 32px);

  @media ${({ theme }) => theme.media.tablet} {
    max-width: calc(100vw - 64px);
  }
`;

export const Tabs = ({ ...props }) => <StyledTabs {...props} />;
