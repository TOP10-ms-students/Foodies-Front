import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipe, getRecipes } from "../../api/recipes";
import { notification } from "antd";

import { ROUTE_PATHS } from "~/routing/constants";

import {
  IngredientsList,
  Label,
  PageBox,
} from "../AddRecipePage/AddRecipePage.styled.jsx";
import {
  PathInfo,
  RecipeInfo,
  RecipeMainInfo,
  RecipeIngredients,
  RecipePreparation,
  PopularRecipes,
  RecipeText,
  Title,
  RecipeImg,
  LabelsBox,
  RecipeLabel,
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

      {recipe ? (
        <RecipeInfo>
          <RecipeMainInfo>
            <RecipeImg src={recipe.thumb} alt={recipe.title} />

            <Title>{recipe.title}</Title>

            <LabelsBox>
              <RecipeLabel>{recipe.category.name}</RecipeLabel>
              <RecipeLabel>{recipe.time} min</RecipeLabel>
            </LabelsBox>

            <RecipeText>{recipe.description}</RecipeText>
          </RecipeMainInfo>

          <RecipeIngredients>
            <Label>Ingredients</Label>

            <IngredientsList>
              {recipe.ingredients.map((ingredient, index) => (
                <IngredientCard
                  key={index}
                  imageSrc={ingredient.img}
                  title={ingredient.name}
                  weight={ingredient.measure}
                  isClose={false}
                />
              ))}
            </IngredientsList>
          </RecipeIngredients>

          <RecipePreparation>
            <Label>RecipePreparation</Label>

            <RecipeText>{recipe.instructions}</RecipeText>

            <Button disabled={false}>Add to favorites</Button>
          </RecipePreparation>
        </RecipeInfo>
      ) : (
        <Title>Loading...</Title>
      )}
      <PopularRecipes>
        <Title>PopularRecipes</Title>
      </PopularRecipes>

      {notificationContext}
    </PageBox>
  );
};
