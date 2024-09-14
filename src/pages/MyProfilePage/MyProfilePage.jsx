import React from "react";
import { useSelector } from "react-redux";

import {
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  TabsList,
  PathInfo,
} from "~/common/components";

import { getCurrentUser } from "~/store/selectors";

import { PageBox, ContentBox, TabsBox } from "./MyProfilePage.styled";

export const MyProfilePage = () => {
  const user = useSelector(getCurrentUser);

  const onUpdateAvatar = () => {
    // TODO
  };

  return (
    <PageBox>
      <PathInfo title={"Profile"} />

      <PageTitle>Profile</PageTitle>

      <PageSubtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </PageSubtitle>

      <ContentBox>
        <UserInfoCard
          name={user?.name}
          email={user?.email}
          avatar={user?.avatar}
          // TODO - fetch from API
          // createdRecipeCount,
          // favoriteRecipeCount,
          // followersCount,
          // followingCount,
          onUpdateAvatar={onUpdateAvatar}
          isCurrentUser
        />

        <TabsBox>
          <TabsList userId={user.id} isCurrentUser />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
