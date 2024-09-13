import React from "react";
import {
  IngredientsList,
  Label,
} from "../../../../pages/AddRecipePage/AddRecipePage.styled.jsx";
import { Ingredients } from "./RecipeIngredients.styled.js";

import { IngredientCard } from "~/common/components";

export const RecipeIngredients = ({ recipe }) => {
  return (
    <Ingredients>
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
    </Ingredients>
  );
};
