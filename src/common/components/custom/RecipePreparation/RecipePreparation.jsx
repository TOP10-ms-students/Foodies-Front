import React, { useEffect, useState } from "react";
import { notification } from "antd";

import { Label } from "../../../../pages/AddRecipePage/AddRecipePage.styled.jsx";
import { Preparation, RecipeText } from "./RecipePreparation.styled.js";

import { Button } from "~/common/components";
import {
  addFavoriteRecipe,
  getFavoriteRecipes,
  removeFavoriteRecipe,
} from "../../../../api/recipes.js";

import { handleApiRequest } from "./helper.js";

export const RecipePreparation = ({ instructions, id, setFavoriteIds }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [notificationApi, notificationContext] = notification.useNotification();

  const getAllFavorite = async () => {
    const data = await handleApiRequest(
      getFavoriteRecipes,
      null,
      notificationApi,
      setIsLoading
    );
    if (data) {
      setIsFavorite(data?.recipes.some((el) => el.id === id));
      setFavoriteIds(data?.recipes.map(({ id }) => id));
    }
  };

  const addFavorite = async () => {
    const data = await handleApiRequest(
      () => addFavoriteRecipe(id),
      "Add to favorites successfully!",
      notificationApi,
      setIsLoading
    );
    if (data) {
      setIsFavorite(true);
      setFavoriteIds((prev) => [...prev, id]);
    }
  };

  const removeFavorite = async () => {
    const data = await handleApiRequest(
      () => removeFavoriteRecipe(id),
      "Removed from favorites successfully!",
      notificationApi,
      setIsLoading
    );
    if (data) {
      setIsFavorite(false);
      setFavoriteIds((prev) => prev.filter((elId) => elId !== id));
    }
  };

  useEffect(() => {
    getAllFavorite();
  }, []);

  return (
    <Preparation>
      <Label>Recipe Preparation</Label>

      <RecipeText>{instructions}</RecipeText>

      {!isLoading && (
        <Button onClick={isFavorite ? removeFavorite : addFavorite}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
      )}

      {isLoading && <Button disabled={true}>Loading...</Button>}

      {notificationContext}
    </Preparation>
  );
};
