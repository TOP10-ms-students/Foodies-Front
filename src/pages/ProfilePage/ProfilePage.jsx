import React, { useEffect, useState } from "react";
import * as notificationApi from "react-dom/test-utils";
import { useParams } from "react-router-dom";

import {
  PathInfo,
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  UserInfoCardSkeleton,
  TabsList,
} from "~/common/components";

import { getUserById } from "~/api/user";

import {
  PageBox,
  ContentBox,
  TabsBox,
} from "../MyProfilePage/MyProfilePage.styled";

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

  return (
    <PageBox>
      <PathInfo title="Profile" />

      <PageTitle>Profile</PageTitle>

      <PageSubtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </PageSubtitle>

      <ContentBox>
        {isLoading ? (
          <UserInfoCardSkeleton />
        ) : (
          <UserInfoCard
            name={user?.name}
            email={user?.email}
            avatar={user?.avatar}
            createdRecipeCount={user?.statistic?.createdRecipeCount}
            followersCount={user?.statistic?.followersCount}
          />
        )}

        <TabsBox>
          <TabsList userId={userId} />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
