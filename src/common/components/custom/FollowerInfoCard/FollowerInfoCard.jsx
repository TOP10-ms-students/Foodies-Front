import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import { ArrowUpIcon } from "~/common/components";
import defaultImg from "~/common/components/img/template_recipe.jpg";

import {
  CardBox,
  CustomAvatar,
  UserDetail,
  UserName,
  StyledButton,
  StyledArrowButton,
  UserInfoBox,
  RecipesList,
  RecipeItem,
  RecipeImage,
} from "./FollowerInfoCard.styled";

export const FollowerInfoCard = ({
  userInfo,
  initialFollowing,
  onFollow,
  onUnfollow,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();

  const { id, name, avatar, recipecount, recipes } = userInfo;

  const displayedImages = recipes
    ? isDesktop
      ? recipes.slice(0, 4)
      : isTablet
        ? recipes.slice(0, 3)
        : []
    : [];

  const handleFollowToggle = () => {
    if (isFollowing) {
      onFollow();
    } else {
      onUnfollow();
    }
    setIsFollowing((prevState) => !prevState);
  };

  const handleImageClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleGoToFollowerProfile = () => {
    navigate(`/users/${id}`);
  };

  return (
    <CardBox>
      <UserInfoBox>
        <CustomAvatar src={avatar} alt="User Avatar" />
        <div>
          <UserName>{name}</UserName>
          <UserDetail>Own recipes: {recipecount}</UserDetail>
          <StyledButton onClick={handleFollowToggle}>
            {isFollowing ? "Following" : "Follow"}
          </StyledButton>
        </div>
      </UserInfoBox>

      {displayedImages.length > 0 && (
        <RecipesList>
          {displayedImages.map((link, index) => (
            <RecipeItem key={index}>
              <a onClick={() => handleImageClick(link.id)}>
                <RecipeImage
                  shape="square"
                  src={link.thumb || defaultImg}
                  alt={`Recipe ${link.id}`}
                />
              </a>
            </RecipeItem>
          ))}
        </RecipesList>
      )}

      <StyledArrowButton
        onClick={handleGoToFollowerProfile}
        icon={<ArrowUpIcon />}
      />
    </CardBox>
  );
};
