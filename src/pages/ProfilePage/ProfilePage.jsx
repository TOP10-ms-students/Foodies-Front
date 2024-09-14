import React from "react";
import { useParams } from "react-router-dom";

import {
  PathInfo,
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  TabsList,
} from "~/common/components";

import {
  PageBox,
  ContentBox,
  TabsBox,
} from "../MyProfilePage/MyProfilePage.styled";

export const ProfilePage = () => {
  const { id: userId } = useParams();

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
        // TODO - fetch from API
        // name
        // email
        // avatar
        // createdRecipeCount,
        // favoriteRecipeCount,
        // followersCount,
        // followingCount,
        />

        <TabsBox>
          <TabsList userId={userId} />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
