import React from "react";
import { Link } from "react-router-dom";

import { HeartIcon, ArrowUpIcon } from "~/common/components/icons";
import avatar from "~/common/components/img/template_avatar.png";
import defaultImg from "~/common/components/img/template_recipe.jpg";

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
import { scrollToTop } from "../../../../utils/scrollToTop";

export const RecipeCard = ({ recipe, isFavorite, switchFavorite }) => {
  const { id, title, thumb, description, owner } = recipe;

  return (
    <Card>
      <Image src={thumb || defaultImg} alt={title} />
      <>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Footer>
          <Author>
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
