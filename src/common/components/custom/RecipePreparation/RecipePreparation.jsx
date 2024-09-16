import React from "react";

import { Button } from "~/common/components";
import { Label } from "~/pages/AddRecipePage/AddRecipePage.styled.jsx";

import { Preparation, RecipeText } from "./RecipePreparation.styled.js";

export const RecipePreparation = ({
  id,
  instructions,
  isFavorite,
  isLoading,
  addFavorite,
  removeFavorite,
  handleOpenLogin,
  isAuth,
}) => {
  const handleActionButton = () => {
    if (!isAuth) {
      handleOpenLogin();
      return;
    }

    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <Preparation>
      <Label>Recipe Preparation</Label>

      <RecipeText>{instructions}</RecipeText>

      <Button onClick={handleActionButton} loading={isLoading}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </Button>
    </Preparation>
  );
};
