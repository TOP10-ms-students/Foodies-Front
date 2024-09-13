import React, { useState, useEffect } from "react";

import avatar from "~/common/components/img/template_avatar.png";
import thumb from "~/common/components/img/template_recipe.jpg";

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

export const RecipeCard = ({ recipe }) => (
  <Card>
    <Image src={recipe.thumb || thumb} alt={recipe.title} />
    <>
      <Title>{recipe.title}</Title>
      <Description>{recipe.description}</Description>
      <Footer>
        <Author>
          <AuthorImage
            src={recipe.owner.avatar || avatar}
            alt={recipe.owner.name}
          />
          <span>{recipe.owner.name}</span>
        </Author>
        <Actions>
          <FavoriteButton>♡</FavoriteButton>
          <ShareButton>↗</ShareButton>
        </Actions>
      </Footer>
    </>
  </Card>
);
