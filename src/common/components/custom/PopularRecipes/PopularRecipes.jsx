import { notification } from "antd";
import React, { useEffect, useState } from "react";

import { useAuthModals } from "~/common/hooks/useAuthModals";

import { getPopularRecipes } from "~/api/recipes.js";

import { Box, Title } from "./PopularRecipes.styled";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { RecipeGrid } from "../RecipesList/RecipeList.styled";

export const PopularRecipes = ({ favoriteIds, switchFavorite }) => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [notificationApi, notificationContext] = notification.useNotification();
  const { handleOpenLogin } = useAuthModals();

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
              openLoginModal={handleOpenLogin}
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
