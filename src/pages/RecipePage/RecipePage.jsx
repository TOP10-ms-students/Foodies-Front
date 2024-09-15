import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  RecipeMainInfo,
  RecipeIngredients,
  RecipePreparation,
  PopularRecipes,
  PathInfo,
} from "~/common/components";
import thumb from "~/common/components/img/template_recipe.jpg";

import { getRecipe } from "~/api/recipes.js";

import { RecipeInfo, RecipeImg } from "./RecipePage.styled.js";
import { RecipeSkeleton } from "./RecipeSkeleton.jsx";
import useFavoriteRecipes from "../../common/hooks/useFavoriteRecipes.js";
import { FormBox, PageBox } from "../AddRecipePage/AddRecipePage.styled.jsx";

export const RecipePage = () => {
  const { id } = useParams();

  const [notificationApi, notificationContext] = notification.useNotification();

  const {
    favoriteIds,
    isLoadingFavorite,
    addFavorite,
    removeFavorite,
    switchFavorite,
  } = useFavoriteRecipes(notificationApi);

  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllRecipe = async () => {
    setIsLoading(true);
    getRecipe(id)
      .then(({ data }) => {
        setRecipe(data.recipe);
      })
      .catch(({ response: { data } }) => {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllRecipe();
  }, [id]);

  return (
    <PageBox>
      <PathInfo title={recipe?.title || "Recipe"} />

      {isLoading && <RecipeSkeleton />}

      {recipe && (
        <FormBox>
          <RecipeImg src={recipe.thumb || thumb} alt={recipe.title} />

          <RecipeInfo>
            <RecipeMainInfo
              title={recipe.title}
              categoryName={recipe.category.name}
              time={recipe.time}
              description={recipe.description}
              ownerId={recipe.owner.id}
              ownerAvatar={recipe.owner.avatar}
              ownerName={recipe.owner.name}
            />

            <RecipeIngredients recipe={recipe} />

            <RecipePreparation
              id={id}
              instructions={recipe.instructions}
              isFavorite={favoriteIds.includes(id)}
              isLoading={isLoadingFavorite}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          </RecipeInfo>
        </FormBox>
      )}

      <PopularRecipes
        favoriteIds={favoriteIds}
        switchFavorite={switchFavorite}
      />

      {notificationContext}
    </PageBox>
  );
};
