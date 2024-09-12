import React from "react";
import {
  ProfileWrapper,
  StyledDrawer,
  UserName,
  UserPopUp,
} from "./LayoutHeader.styled";
import { Avatar } from "../../components/ui/Avatar";
import { MenuIconSvg } from "../../components/icons/MenuIconSvg";
import { Drawer } from "antd";
import { ArrowUpIcon, DownIcon, UpIcon } from "../../components/icons/icons";
import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routing/constants";

const UserBar = ({
  name = "User",
  isDrawer = false,
  isUserPopUp,
  switchDrawer,
  switchUserPopUp,
  handleOpenLogout,
}) => {
  return (
    <ProfileWrapper>
      <div onClick={switchUserPopUp}>
        <Avatar />

        <UserName>
          <span>{name}</span>
          {isUserPopUp ? <DownIcon /> : <UpIcon />}
        </UserName>
      </div>

      <span onClick={switchDrawer}>
        <MenuIconSvg />
      </span>

      <Drawer
        title="Foodies"
        placement="right"
        onClose={switchDrawer}
        open={isDrawer}
      >
        <StyledDrawer>
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
        </StyledDrawer>
      </Drawer>

      {isUserPopUp && (
        <UserPopUp>
          <li>
            <NavLink
              to={ROUTE_PATHS.MY_PROFILE}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          </li>

          <li onClick={handleOpenLogout}>
            <span>Log out</span>
            <ArrowUpIcon />
          </li>
        </UserPopUp>
      )}
    </ProfileWrapper>
  );
};

export default UserBar;
