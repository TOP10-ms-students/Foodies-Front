import React from "react";
import { NavLink } from "react-router-dom";

import { HeaderMenuWrapper } from "./LayoutHeader.styled";
import { ROUTE_PATHS } from "../../../routing/constants";

const HeaderNav = () => {
  return (
    <HeaderMenuWrapper>
      <ul>
        <li>
          <NavLink
            to={ROUTE_PATHS.HOME}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTE_PATHS.ADD_RECIPE}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ADD RECIPE
          </NavLink>
        </li>
      </ul>
    </HeaderMenuWrapper>
  );
};

export default HeaderNav;
