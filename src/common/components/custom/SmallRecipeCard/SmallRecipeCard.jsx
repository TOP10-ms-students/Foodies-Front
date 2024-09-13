import React from "react";
import { Link } from "react-router-dom";

import thumb from "~/common/components/img/template_recipe.jpg";

import {
  CardBox,
  RecipeImage,
  BoxInfoIcons,
  BoxInfo,
  BoxInfoTitle,
  RecipeTitle,
  RecipeDescription,
  WrapperIcon,
} from "./SmallRecipeCard.styled";
import { ArrowUpIcon, DeleteIcon } from "../../icons/icons";

export const RecipeInfoCard = ({ recipe, onDelete }) => (
  <CardBox>
    <RecipeImage src={recipe.thumb || thumb} alt={recipe.title} />
    <BoxInfo>
      <BoxInfoTitle>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <RecipeDescription>{recipe.description}</RecipeDescription>
      </BoxInfoTitle>
      <BoxInfoIcons>
        <Link to={`/recipe/${recipe.id}`}>
          <WrapperIcon>
            <ArrowUpIcon />
          </WrapperIcon>
        </Link>
        <WrapperIcon onClick={onDelete}>
          <DeleteIcon />
        </WrapperIcon>
      </BoxInfoIcons>
    </BoxInfo>
  </CardBox>
);
