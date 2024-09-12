import React from "react";

import { HEADER_LINKS } from "./constants";

import { HeaderMenuWrapper, HeaderMenuLink } from "./LayoutHeader.styled";

const HeaderNav = () => (
  <HeaderMenuWrapper>
    {HEADER_LINKS.map(({ name, path }) => (
      <HeaderMenuLink key={name} to={path}>
        {name}
      </HeaderMenuLink>
    ))}
  </HeaderMenuWrapper>
);

export default HeaderNav;
