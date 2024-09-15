import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import * as notificationApi from "react-dom/test-utils";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  PathInfo,
  PageTitle,
  PageSubtitle,
  UserInfoCard,
  UserInfoCardSkeleton,
  TabsList,
} from "~/common/components";

import { getUserById, followUser, unfollowUser } from "~/api/user";

import { getCurrentUser } from "~/store/selectors.js";

import { ROUTE_PATHS } from "~/routing/constants.js";

import {
  PageBox,
  ContentBox,
  TabsBox,
} from "../MyProfilePage/MyProfilePage.styled";

export const ProfilePage = () => {
  const [modal, modalContextHolder] = Modal.useModal();

  const { id: userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowLoading, setIsFollowLoading] = useState(false);

  const loggedUser = useSelector(getCurrentUser);
  const itsMe = userId === loggedUser.id;

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

  const handleFollowUser = async () => {
    setIsFollowLoading(true);
    try {
      await followUser(userId);
      setUser((prev) => ({ ...prev, isFollowing: true }));
    } catch ({ response: { data } }) {
      const message = data?.message ?? "Something went wrong";
      notificationApi.error({ message });
    } finally {
      setIsFollowLoading(false);
    }
  };

  const handleUnfollowUser = async () => {
    modal.confirm({
      title: "Unfollow user",
      icon: null,
      content: "Are you sure you want to unfollow this user?",
      okText: "Unfollow",
      onOk: confirmUnfollowUser,
      okButtonProps: { loading: isFollowLoading },
      cancelButtonProps: { loading: isFollowLoading },
      centered: true,
    });
  };

  const confirmUnfollowUser = async () => {
    setIsFollowLoading(true);
    try {
      await unfollowUser(userId);
      setUser((prev) => ({ ...prev, isFollowing: false }));
    } catch ({ response: { data } }) {
      const message = data?.message ?? "Something went wrong";
      notificationApi.error({ message });
    } finally {
      setIsFollowLoading(false);
    }
  };

  useEffect(() => {
    if (itsMe) navigate(ROUTE_PATHS.MY_PROFILE);
  }, [itsMe]);

  useEffect(() => {
    if (userId) fetchUser(userId);
  }, [userId]);

  const isFollowing = user?.isFollowing;

  const actionButtonText = isFollowing ? "Unfollow" : "Follow";

  return (
    <PageBox>
      {modalContextHolder}

      <PathInfo title="Profile" />

      <PageTitle>Profile</PageTitle>

      <PageSubtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </PageSubtitle>

      <ContentBox>
        {isLoading ? (
          <UserInfoCardSkeleton actionButtonText={actionButtonText} />
        ) : (
          <UserInfoCard
            name={user?.name}
            email={user?.email}
            avatar={user?.avatar}
            createdRecipeCount={user?.statistic?.createdRecipeCount}
            followersCount={user?.statistic?.followersCount}
            actionButtonText={actionButtonText}
            onActionButtonClick={
              isFollowing ? handleUnfollowUser : handleFollowUser
            }
            isLoadingActionButton={isFollowLoading}
          />
        )}

        <TabsBox>
          <TabsList userId={userId} />
        </TabsBox>
      </ContentBox>
    </PageBox>
  );
};
