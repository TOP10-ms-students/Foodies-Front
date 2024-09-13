import React from "react";

import { Label } from "../../../../pages/AddRecipePage/AddRecipePage.styled.jsx";
import { Preparation, RecipeText } from "./RecipePreparation.styled.js";

import { Button } from "~/common/components";

export const RecipePreparation = ({ instructions }) => {
  return (
    <Preparation>
      <Label>RecipePreparation</Label>

      <RecipeText>{instructions}</RecipeText>

      <Button disabled={false}>Add to favorites</Button>
    </Preparation>
  );
};
