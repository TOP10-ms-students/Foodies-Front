import { notification } from "antd";
import React, { useEffect, useState } from "react";
import * as notificationApi from "react-dom/test-utils";

import {
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  UserInfoCardSkeleton,
  TabsList,
  PathInfo,
} from "~/common/components";

import { getCurrentUser, updateCurrentUserAvatar } from "~/api/user";

import { PageBox, ContentBox, TabsBox } from "./MyProfilePage.styled";

export const MyProfilePage = () => {
  const [notificationApi, notificationContext] = notification.useNotification();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onUpdateAvatar = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      await updateCurrentUserAvatar(formData);

      notificationApi.success({
        message: "Avatar successfully updated",
      });

      fetchCurrentUser();
    };

    input.remove();
  };

  const fetchCurrentUser = async () => {
    setIsLoading(true);

    try {
      const { data } = await getCurrentUser();

      setUser(data.user);
    } catch ({ response: { data } }) {
      const message = data?.message ?? "Something went wrong";
      notificationApi.error({ message });
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <PageBox>
      {notificationContext}

      <PathInfo title="Profile" />

      <PageTitle>Profile</PageTitle>

      <PageSubtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </PageSubtitle>

      <ContentBox>
        {isLoading ? (
          <UserInfoCardSkeleton isCurrentUser />
        ) : (
          <UserInfoCard
            name={user?.name}
            email={user?.email}
            avatar={user?.avatar}
            createdRecipeCount={user?.statistic?.createdRecipeCount}
            followersCount={user?.statistic?.followersCount}
            favoriteRecipeCount={user?.statistic?.favoriteRecipeCount}
            followingCount={user?.statistic?.followingCount}
            onUpdateAvatar={onUpdateAvatar}
            isCurrentUser
          />
        )}

        <TabsBox>
          <TabsList userId={user?.id} isCurrentUser />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
