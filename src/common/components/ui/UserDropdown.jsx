import { Dropdown as AntdDropdown } from "antd";
import React from "react";
import styled from "styled-components";

import { DownIcon } from "../icons";
import { Avatar } from "./Avatar";

const StyledDropdown = styled(AntdDropdown)``;

const StyledDropdownBox = styled.div`
  height: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
`;

const StyledAvatar = styled(Avatar)`
  height: 32px;
  width: 32px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 50px;
    width: 50px;
  }
`;

export const UserDropdown = ({ avatarSrc, userName, ...props }) => (
  <StyledDropdown {...props}>
    <StyledDropdownBox>
      <StyledAvatar src={avatarSrc} />
      <UserName>{userName}</UserName>
      <DownIcon />
    </StyledDropdownBox>
  </StyledDropdown>
);
