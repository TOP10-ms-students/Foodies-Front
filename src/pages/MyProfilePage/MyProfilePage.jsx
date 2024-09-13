import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  TabsList,
} from "~/common/components";

import { getCurrentUser } from "~/store/selectors";

import { ROUTE_PATHS } from "~/routing/constants";

import { PageBox, ContentBox, TabsBox } from "./MyProfilePage.styled";

const BREADCRUMB_ITEMS = [
  { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
  { title: "Profile" },
];

export const MyProfilePage = () => {
  const user = useSelector(getCurrentUser);

  const onUpdateAvatar = () => {
    // TODO
  };

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
