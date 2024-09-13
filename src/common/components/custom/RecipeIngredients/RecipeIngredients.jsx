import React from "react";

import { IngredientCard } from "~/common/components";
import {
  IngredientsList,
  Label,
} from "~/pages/AddRecipePage/AddRecipePage.styled.jsx";

import { Ingredients } from "./RecipeIngredients.styled.js";

export const RecipeIngredients = ({ recipe }) => (
  <Ingredients>
    <Label>Ingredients</Label>

    <IngredientsList>
      {recipe.ingredients.map((ingredient, index) => (
        <IngredientCard
          key={index}
          imageSrc={ingredient.img}
          title={ingredient.name}
          weight={ingredient.measure}
        />
      ))}
    </IngredientsList>
  </Ingredients>
);
