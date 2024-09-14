import React from "react";
import { Link } from "react-router-dom";

import defaultImg from "~/common/components/img/template_recipe.jpg";

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

export const SmallRecipeCard = ({
  recipe: { id, thumb, title, description },
  showDeleteButton,
  onDelete,
}) => (
  <CardBox>
    <RecipeImage src={thumb || defaultImg} alt={title} />
    <BoxInfo>
      <BoxInfoTitle>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
      </BoxInfoTitle>
      <BoxInfoIcons>
        <Link to={`/recipe/${id}`}>
          <WrapperIcon>
            <ArrowUpIcon />
          </WrapperIcon>
        </Link>
        {showDeleteButton && (
          <WrapperIcon onClick={onDelete}>
            <DeleteIcon />
          </WrapperIcon>
        )}
      </BoxInfoIcons>
    </BoxInfo>
  </CardBox>
);
