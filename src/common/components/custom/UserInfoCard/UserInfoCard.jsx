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

export const UserInfoCard = ({ userInfo, onClick, isCurrentUser }) => {
  const {
    user: { name, email, avatar },
    statistic: {
      createdRecipeCount,
      favoriteRecipeCount,
      followersCount,
      followingCount,
    },
  } = userInfo;

  return (
    <CardBox>
      <AvatarWrapper>
        <CustomAvatar src={avatar} alt="User Avatar" />
        {isCurrentUser && (
          <PlusIcon onClick={onClick}>
            <PlusOutlined />
          </PlusIcon>
        )}
      </AvatarWrapper>

      <UserName>{name}</UserName>

      <UserInfo>
        <UserDetail>
          Email: <UserDetailNumber>{email}</UserDetailNumber>
        </UserDetail>
        <UserDetail>
          Added recipes:{" "}
          <UserDetailNumber>{createdRecipeCount}</UserDetailNumber>
        </UserDetail>
        {isCurrentUser && (
          <UserDetail>
            Favorites:{" "}
            <UserDetailNumber>{favoriteRecipeCount}</UserDetailNumber>
          </UserDetail>
        )}
        <UserDetail>
          Followers: <UserDetailNumber>{followersCount}</UserDetailNumber>
        </UserDetail>
        {isCurrentUser && (
          <UserDetail>
            Following: <UserDetailNumber>{followingCount}</UserDetailNumber>
          </UserDetail>
        )}
      </UserInfo>
    </CardBox>
  );
};
