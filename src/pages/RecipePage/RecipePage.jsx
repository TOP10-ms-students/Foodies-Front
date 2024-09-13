import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  Breadcrumb,
  RecipeMainInfo,
  RecipeIngredients,
  RecipePreparation,
  PopularRecipes,
} from "~/common/components";

import { getRecipe } from "~/api/recipes.js";

import { ROUTE_PATHS } from "~/routing/constants";

import { PathInfo, RecipeInfo, RecipeImg } from "./RecipePage.styled.js";
import { FormBox, PageBox } from "../AddRecipePage/AddRecipePage.styled.jsx";

export const RecipePage = () => {
  const { id } = useParams();

  const [notificationApi, notificationContext] = notification.useNotification();

  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const BREADCRUMB_ITEMS = [
    { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
    { title: recipe?.title ?? "Recipe" },
  ];

  const getAllRecipe = async () => {
    setIsLoading(true);
    getRecipe(id)
      .then(({ data }) => {
        setRecipe(data.recipe);
        notificationApi.success({ message: "Recipe get successfully!" });
      })
      .catch(({ response: { data } }) => {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllRecipe();
  }, []);

  return (
    <PageBox>
      <PathInfo>
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </PathInfo>

      {!isLoading && recipe ? (
        <FormBox>
          <RecipeImg src={recipe.thumb} alt={recipe.title} />

          <RecipeInfo>
            <RecipeMainInfo
              title={recipe.title}
              categoryName={recipe.category.name}
              time={recipe.time}
              description={recipe.description}
              ownerAvatar={recipe.owner.avatar}
              ownerName={recipe.owner.name}
            />

            <RecipeIngredients recipe={recipe} />

            <RecipePreparation instructions={recipe.instructions} id={id} />
          </RecipeInfo>
        </FormBox>
      ) : (
        <h2>Recipes Loading...</h2>
      )}

      <PopularRecipes />

      {notificationContext}
    </PageBox>
  );
};