import React from "react";

import { HEADER_LINKS } from "./constants";

import { HeaderMenuWrapper, HeaderMenuLink } from "./LayoutHeader.styled";

const HeaderNav = ({ isHomePage = false }) => (
  <HeaderMenuWrapper>
    {HEADER_LINKS.map(({ name, path }) => (
      <HeaderMenuLink key={name} to={path} $isHomePage={isHomePage}>
        {name}
      </HeaderMenuLink>
    ))}
  </HeaderMenuWrapper>
);

export default HeaderNav;
