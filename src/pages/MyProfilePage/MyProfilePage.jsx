import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  UserInfoCardSkeleton,
  TabsList,
  PathInfo,
} from "~/common/components";

import { useAuthModals } from "~/common/hooks/useAuthModals";

import { getCurrentUser, updateCurrentUserAvatar } from "~/api/user";

import { updateUserAvatar } from "~/store/slices/auth";

import { PageBox, ContentBox, TabsBox } from "./MyProfilePage.styled";

export const MyProfilePage = () => {
  const dispatch = useDispatch();
  const [notificationApi, notificationContext] = notification.useNotification();

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { handleOpenLogout } = useAuthModals();

  const onUpdateAvatar = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      const { data } = await updateCurrentUserAvatar(formData);
      dispatch(updateUserAvatar(data.user.avatar));

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

      setCurrentUser(data.user);
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
          <UserInfoCardSkeleton isCurrentUser actionButtonText="Log out" />
        ) : (
          <UserInfoCard
            name={currentUser?.name}
            email={currentUser?.email}
            avatar={currentUser?.avatar}
            createdRecipeCount={currentUser?.statistic?.createdRecipeCount}
            followersCount={currentUser?.statistic?.followersCount}
            favoriteRecipeCount={currentUser?.statistic?.favoriteRecipeCount}
            followingCount={currentUser?.statistic?.followingCount}
            onUpdateAvatar={onUpdateAvatar}
            isCurrentUser
            actionButtonText="Log out"
            onActionButtonClick={handleOpenLogout}
          />
        )}

        <TabsBox>
          <TabsList userId={currentUser?.id} isCurrentUser />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
