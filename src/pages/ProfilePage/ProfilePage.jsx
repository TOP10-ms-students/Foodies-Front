import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  Breadcrumb,
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  TabsList,
} from "~/common/components";

import { ROUTE_PATHS } from "~/routing/constants";

import {
  PageBox,
  ContentBox,
  TabsBox,
} from "../MyProfilePage/MyProfilePage.styled";

const BREADCRUMB_ITEMS = [
  { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
  { title: "Profile" },
];

export const ProfilePage = () => {
  const { id: userId } = useParams();

  return (
    <PageBox>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

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
