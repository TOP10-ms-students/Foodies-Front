import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb, PageTitle, PageSubtitle } from "~/common/components";
import { FollowerInfoCard } from "~/common/components/custom/FollowerInfoCard";
import { UserInfoCard } from "~/common/components/custom/UserInfoCard";

import { ROUTE_PATHS } from "~/routing/constants";

import { PageBox } from "./MyProfilePage.styled";
import { TabsList } from "../../common/components/custom/TabsList/TabsList";
import { Tabs } from "../../common/components/ui/Tabs";

const BREADCRUMB_ITEMS = [
  { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
  { title: "Profile" },
];

export const MyProfilePage = () => (
  <PageBox>
    <Breadcrumb items={BREADCRUMB_ITEMS} />

    <PageTitle>Profile</PageTitle>

    <PageSubtitle>
      Reveal your culinary art, share your favorite recipe and create
      gastronomic masterpieces with us.
    </PageSubtitle>

    <TabsList />
    {/* <UserInfoCard /> */}
    {/* <FollowerInfoCard /> */}
  </PageBox>
);
