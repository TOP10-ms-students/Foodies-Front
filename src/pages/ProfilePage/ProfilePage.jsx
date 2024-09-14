import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import * as notificationApi from "react-dom/test-utils";
import { Link, useParams } from "react-router-dom";

import {
  Breadcrumb,
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  TabsList,
} from "~/common/components";

import { getUserById } from "~/api/user";

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

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async (id) => {
    setIsLoading(true);

    try {
      const { data } = await getUserById(id);

      setUser(data.user);
    } catch ({ response: { data } }) {
      const message = data?.message ?? "Something went wrong";
      notificationApi.error({ message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchUser(userId);
  }, [userId]);

  if (isLoading) return <Spin />;

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
          createdRecipeCount={user?.statistic?.createdRecipeCount}
          followersCount={user?.statistic?.followersCount}
        />

        <TabsBox>
          <TabsList userId={userId} />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
