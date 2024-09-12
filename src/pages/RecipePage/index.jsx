import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipe, getRecipes } from "../../api/recipes";
import { notification } from "antd";

import { ROUTE_PATHS } from "~/routing/constants";

import {
  PathInfo,
  RecipeInfo,
  RecipeMainInfo,
  RecipeIngredients,
  RecipePreparation,
  PopularRecipes,
} from "./RecipePage.styled";

import {
  Breadcrumb,
  PageTitle,
  PageSubtitle,
  UploadPhoto,
  Select,
  StepsRangeInput,
  BorderlessInput,
  BorderlessTextarea,
  Button,
  IngredientCard,
  DeleteIcon,
} from "~/common/components";
import { Label, PageBox } from "../AddRecipePage/AddRecipePage.styled.jsx";

export const RecipePage = () => {
  const { id } = useParams();

  const [notificationApi, notificationContext] = notification.useNotification();

  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState();

  console.log(id, recipe);

  const BREADCRUMB_ITEMS = [
    { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
    { title: recipe?.title ?? "Recipe" },
  ];

  const getAllRecipe = async () => {
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
    id && getAllRecipe();
  }, []);

  return (
    <PageBox>
      <PathInfo>
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </PathInfo>

      {recipe && (
        <RecipeInfo>
          <RecipeMainInfo>
            <img src={recipe.thumb} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </RecipeMainInfo>
          <RecipeIngredients>
            <Label>Ingredients</Label>
            <ul>
              {recipe.ingredients.map(({ img, name, measure }) => (
                <li>
                  <img src={img} alt={name} />
                  <div>
                    <p>{name}</p>
                    <span>{measure}</span>
                  </div>
                </li>
              ))}
            </ul>
          </RecipeIngredients>
          <RecipePreparation>
            <Label>RecipePreparation</Label>
            <p>{recipe.instructions}</p>
          </RecipePreparation>
        </RecipeInfo>
      )}
      <PopularRecipes>
        <h2>PopularRecipes</h2>
      </PopularRecipes>
      {notificationContext}
    </PageBox>
  );
};
