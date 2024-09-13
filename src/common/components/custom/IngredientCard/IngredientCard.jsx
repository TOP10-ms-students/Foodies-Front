import React from "react";

import {
  IngredientCardBox,
  IngredientImageCard,
  IngredientImage,
  IngredientName,
  IngredientWeight,
  CloseButton,
} from "./IngredientCard.styled";

export const IngredientCard = ({ imageSrc, title, weight, onDelete }) => (
  <IngredientCardBox>
    <IngredientImageCard>
      <IngredientImage src={imageSrc} alt="ingredient" />
    </IngredientImageCard>

    <div>
      <IngredientName>{title}</IngredientName>
      <IngredientWeight>{weight}</IngredientWeight>
    </div>

    {onDelete && <CloseButton onClick={onDelete} />}
  </IngredientCardBox>
);
