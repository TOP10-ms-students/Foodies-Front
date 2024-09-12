import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { ArrowUpIcon } from "~/common/components";

import {
  CardBox,
  CustomAvatar,
  UserDetail,
  UserName,
  StyledButton,
  StyledArrowButton,
  UserInfoBox,
} from "./FollowerInfoCard.styled";

export const FollowerInfoCard = ({
  userInfo,
  isFollowing: initialFollowing,
  recipesList,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const displayedImages = isDesktop
    ? recipesList.slice(0, 4)
    : isTablet
      ? recipesList.slice(0, 3)
      : [];

  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
    // if (isFollowing) {
    //   unfollowUser();
    // } else {
    //   followUser();
    // }
  };

  return (
    <CardBox>
      <UserInfoBox>
        <CustomAvatar src={null} alt="User Avatar" />
        <div>
          <UserName>Name</UserName>
          <UserDetail>Own recipes: 30</UserDetail>
          <StyledButton onClick={handleFollowToggle}>
            {isFollowing ? "Following" : "Follow"}
          </StyledButton>
        </div>
      </UserInfoBox>

      {/* {displayedImages.length > 0 && (
        <ul>
          {displayedImages.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.imgSrc} alt={link.altText} />
              </a>
            </li>
          ))}
        </ul>
      )} */}

      <StyledArrowButton icon={<ArrowUpIcon />} />
    </CardBox>
  );
};
