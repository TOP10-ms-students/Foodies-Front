import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { UserDropdown } from "~/common/components";
import { ArrowUpIcon } from "~/common/components/icons/icons";
import { MenuIconSvg } from "~/common/components/icons/MenuIconSvg";

import { HEADER_LINKS } from "./constants";
import { ROUTE_PATHS } from "~/routing/constants";

import {
  ProfileWrapper,
  StyledDrawer,
  StyledDrawerContent,
  StyledDrawerLink,
  MobileMenuButtonBox,
} from "./LayoutHeader.styled";

const UserBar = ({ name = "User", handleOpenLogout, isHomePage = false }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const openMobileMenu = () => setIsOpenMobileMenu(true);
  const closeMobileMenu = () => setIsOpenMobileMenu(false);

  const items = [
    {
      key: "1",
      label: <NavLink to={ROUTE_PATHS.MY_PROFILE}>Profile</NavLink>,
    },
    {
      key: "2",
      label: (
        <div onClick={handleOpenLogout}>
          <span>Log out</span>
          <ArrowUpIcon />
        </div>
      ),
    },
  ];

  return (
    <>
      <ProfileWrapper>
        <UserDropdown menu={{ items }} avatarSrc={null} userName={name} />

        <MobileMenuButtonBox onClick={openMobileMenu} $isHomePage={isHomePage}>
          <MenuIconSvg />
        </MobileMenuButtonBox>
      </ProfileWrapper>

      <StyledDrawer
        title="foodies"
        placement="top"
        height="100%"
        onClose={closeMobileMenu}
        open={isOpenMobileMenu}
        // eslint-disable-next-line prettier/prettier
      >
        <StyledDrawerContent>
          {HEADER_LINKS.map(({ name, path }) => (
            <StyledDrawerLink key={name} to={path} onClick={closeMobileMenu}>
              {name}
            </StyledDrawerLink>
          ))}
        </StyledDrawerContent>
      </StyledDrawer>
    </>
  );
};

export default UserBar;
