import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { HeartIcon, ArrowUpIcon } from "~/common/components/icons";
import avatar from "~/common/components/img/template_avatar.png";
import defaultImg from "~/common/components/img/template_recipe.jpg";

import { scrollToTop } from "~/utils/scrollToTop";

import { getIsAuthenticated } from "~/store/selectors";

import {
  Card,
  Image,
  Title,
  Description,
  Footer,
  Author,
  AuthorImage,
  Actions,
  FavoriteButton,
  ShareButton,
} from "./RecipeCard.styled";
import { HeartIconFilled } from "../../icons/icons";
import { Spin } from "antd";

export const RecipeCard = ({
  recipe,
  isFavorite,
  switchFavorite,
  openLoginModal,
  loadingId,
}) => {
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);

  const { id, title, thumb, description, owner } = recipe;

  const goToUserPage = () => {
    navigate(`/users/${owner.id}`);
  };

  const icon = isFavorite ? <HeartIconFilled /> : <HeartIcon />;

  return (
    <Card>
      <Image src={thumb || defaultImg} alt={title} />
      <>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Footer>
          <Author
            onClick={
              isAuth ? () => (goToUserPage(), scrollToTop()) : openLoginModal
            }
          >
            <AuthorImage src={owner.avatar || avatar} alt={owner.name} />
            <span>{owner.name}</span>
          </Author>

          <Actions>
            {isAuth ? (
              <FavoriteButton onClick={() => switchFavorite(id)}>
                {loadingId === id ? <Spin size="middle" /> : icon}
              </FavoriteButton>
            ) : (
              <FavoriteButton type="primary" onClick={openLoginModal}>
                <HeartIcon />
              </FavoriteButton>
            )}
            <Link to={`/recipe/${id}`} onClick={scrollToTop}>
              <ShareButton>
                <ArrowUpIcon />
              </ShareButton>
            </Link>
          </Actions>
        </Footer>
      </>
    </Card>
  );
};
