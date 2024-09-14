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
}) => (
  <Preparation>
    <Label>Recipe Preparation</Label>

    <RecipeText>{instructions}</RecipeText>

    {!isLoading && (
      <Button
        onClick={() => (isFavorite ? removeFavorite(id) : addFavorite(id))}
      >
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </Button>
    )}

    {isLoading && <Button disabled>Loading...</Button>}
  </Preparation>
);
