import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { styled, css } from "styled-components";

import { Button } from "~/common/components/ui/Button";

const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FixedHeader = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLayoutHeader = styled.header`
  ${flexCenterBetween};
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 343px;
  width: 100%;
  transform: translateX(-50%);
  z-index: 100;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: unset;
    position: absolute;
    width: 100%;
  }

  padding: 16px;
  background-color: ${({ theme }) => theme?.colors?.black};
  border-radius: 30px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 20px 32px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 20px 60px;
  }
`;

export const LogoLink = styled(NavLink)`
  font-weight: 800;
  font-size: 20px;
  color: ${({ theme }) => theme?.colors?.white};
  text-decoration: none;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
  }
`;

export const HeaderMenuWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tablet} {
    ${flexCenterBetween};
    gap: 40px;
  }
`;

export const HeaderMenuLink = styled(NavLink)`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 14px;
  color: ${({ theme }) => theme?.colors?.white};
  background-color: ${({ theme }) => theme?.colors?.black};
  border-radius: 30px;
  text-decoration: none;
  &.active {
    border: 1px solid ${({ theme }) => theme?.colors?.darkgray};
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
  ${flexCenterBetween};
`;

export const MobileMenuButtonBox = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-header,
  .ant-drawer-body {
    background-color: ${({ theme }) => theme?.colors?.black} !important;
  }

  .ant-drawer-header {
    border-bottom: none;
    padding: 30px 24px;
    * {
      color: ${({ theme }) => theme?.colors?.white} !important;
    }
  }

  .ant-drawer-header-title {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
  }

  .ant-drawer-title {
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
`;

export const StyledDrawerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledDrawerLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.white};
  height: 34px;
  padding: 6px 20px;

  &.active {
    border-radius: 17px;
    border: 1px solid ${({ theme }) => theme?.colors?.white};
  }
`;

export const StyledAuthBar = styled.div`
  ${flexCenterBetween};
  background-color: ${({ theme }) => theme?.colors?.white};
  border-radius: 30px;
`;

export const StyledAuthButton = styled(Button)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  padding: 10px 16px !important;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 14px 28px !important;
  }
`;
