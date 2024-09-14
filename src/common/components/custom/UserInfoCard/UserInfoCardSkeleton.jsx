import { Skeleton } from "antd";
import React from "react";

import {
  CardBox,
  AvatarWrapper,
  UserName,
  UserInfo,
  UserDetail,
  SkeletonAvatar,
  SkeletonNumber,
} from "./UserInfoCard.styled";

const TextSkeleton = () => <Skeleton.Input active size="small" />;
const NumberSkeleton = () => <SkeletonNumber active size="small" />;

export const UserInfoCardSkeleton = ({ isCurrentUser }) => (
  <CardBox>
    <AvatarWrapper>
      <SkeletonAvatar active />
    </AvatarWrapper>

    <UserName>
      <TextSkeleton />
    </UserName>

    <UserInfo>
      <UserDetail>
        Email: <TextSkeleton />
      </UserDetail>
      <UserDetail>
        Added recipes: <NumberSkeleton />
      </UserDetail>
      {isCurrentUser && (
        <UserDetail>
          Favorites: <NumberSkeleton />
        </UserDetail>
      )}
      <UserDetail>
        Followers:
        <NumberSkeleton />
      </UserDetail>
      {isCurrentUser && (
        <UserDetail>
          Following: <NumberSkeleton />
        </UserDetail>
      )}
    </UserInfo>
  </CardBox>
);
