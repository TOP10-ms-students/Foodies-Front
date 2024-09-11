import { PlusOutlined } from "@ant-design/icons";
import React from "react";

import {
  CardBox,
  CustomAvatar,
  AvatarWrapper,
  PlusIcon,
  UserName,
  UserInfo,
  UserDetail,
  UserDetailNumber,
} from "./UserInfoCard.styled";

export const UserInfoCard = ({
  userInfo,
  onClick,
  isCurrentUser = true,
  ...props
}) => (
  <CardBox>
    <AvatarWrapper>
      <CustomAvatar src={null} alt="User Avatar" />
      {isCurrentUser && (
        <PlusIcon onClick={onClick}>
          <PlusOutlined />
        </PlusIcon>
      )}
    </AvatarWrapper>

    <UserName>Name</UserName>

    <UserInfo>
      <UserDetail>
        Email: <UserDetailNumber>example@email.com</UserDetailNumber>
      </UserDetail>
      <UserDetail>
        Added recipes: <UserDetailNumber>7</UserDetailNumber>
      </UserDetail>
      {isCurrentUser && (
        <UserDetail>
          Favorites: <UserDetailNumber>7</UserDetailNumber>
        </UserDetail>
      )}
      <UserDetail>
        Followers: <UserDetailNumber>7</UserDetailNumber>
      </UserDetail>
      {isCurrentUser && (
        <UserDetail>
          Following: <UserDetailNumber>7</UserDetailNumber>
        </UserDetail>
      )}
    </UserInfo>
  </CardBox>
);
