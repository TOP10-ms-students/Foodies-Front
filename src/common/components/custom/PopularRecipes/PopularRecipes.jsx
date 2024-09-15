import { notification } from "antd";
import React, { useEffect, useState } from "react";

import { getPopularRecipes } from "~/api/recipes.js";

import { Box, Title } from "./PopularRecipes.styled";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { RecipeGrid } from "../RecipesList/RecipeList.styled";

export const PopularRecipes = ({
  favoriteIds,
  switchFavorite,
  loadingRecipeId,
}) => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [notificationApi, notificationContext] = notification.useNotification();

  const getPopular = async () => {
    setIsLoading(true);
    getPopularRecipes()
      .then(({ data }) => {
        setPopular(data?.recipes);
      })
      .catch(({ data }) => {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Box>
      <Title>Popular Recipes</Title>

      <RecipeGrid>
        {!isLoading && popular.length > 0 ? (
          popular.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favoriteIds.includes(recipe.id)}
              switchFavorite={switchFavorite}
              loadingId={loadingRecipeId}
            />
          ))
        ) : (
          <p>No popular recipes found.</p>
        )}
      </RecipeGrid>

      {notificationContext}
    </Box>
  );
};
