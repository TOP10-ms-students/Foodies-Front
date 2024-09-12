import { Dropdown as AntdDropdown } from "antd";
import React from "react";
import styled from "styled-components";

import { DownIcon } from "../icons";
import { Avatar } from "./Avatar";

const StyledDropdownBox = styled.div`
  height: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.darkgray};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 14px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 50px;
    border-radius: 25px;
  }
`;

const UserName = styled.span`
  display: inline-block;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px 0 6px;

  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

const StyledAvatar = styled(Avatar)`
  height: 32px;
  width: 32px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 50px;
    width: 50px;
  }
`;

const StyledDownIcon = styled(DownIcon)`
  width: 12px;
  height: 12px;
`;

export const UserDropdown = ({ avatarSrc, userName, ...props }) => (
  <AntdDropdown {...props}>
    <StyledDropdownBox>
      <StyledAvatar src={avatarSrc} />
      <UserName>{userName}</UserName>
      <StyledDownIcon />
    </StyledDropdownBox>
  </AntdDropdown>
);
