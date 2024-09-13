import React from "react";
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

export const RecipeCardSkeleton = () => {
  return (
    <Card>
      <Image />
      <>
        <Title />
        <Description />
        <Description />
        <Footer>
          <Author>
            <AuthorImage />
            <Author />
          </Author>
          <Actions>
            <FavoriteButton>♡</FavoriteButton>
            <ShareButton>↗</ShareButton>
          </Actions>
        </Footer>
      </>
    </Card>
  );
};
