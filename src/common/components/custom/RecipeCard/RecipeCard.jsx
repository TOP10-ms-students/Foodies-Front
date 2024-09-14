import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { HeartIcon, ArrowUpIcon } from "~/common/components/icons";
import avatar from "~/common/components/img/template_avatar.png";
import defaultImg from "~/common/components/img/template_recipe.jpg";

import { scrollToTop } from "~/utils/scrollToTop";

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

export const RecipeCard = ({ recipe, isFavorite, switchFavorite }) => {
  const navigate = useNavigate();

  const { id, title, thumb, description, owner } = recipe;

  const goToUserPage = () => {
    navigate(`/users/${owner.id}`);
  };

  return (
    <Card>
      <Image src={thumb || defaultImg} alt={title} />
      <>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Footer>
          <Author onClick={() => (goToUserPage(), scrollToTop())}>
            <AuthorImage src={owner.avatar || avatar} alt={owner.name} />
            <span>{owner.name}</span>
          </Author>

          <Actions>
            <FavoriteButton onClick={() => switchFavorite(id)}>
              {isFavorite ? <HeartIconFilled /> : <HeartIcon />}
            </FavoriteButton>

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
