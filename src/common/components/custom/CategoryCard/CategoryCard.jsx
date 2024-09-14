import React from "react";

import { ArrowUpIcon } from "~/common/components/icons";

import {
  CategoryImage,
  CategoryCardWrapper,
  CategoryOverlay,
  CategoryInfo,
  IconArrow,
} from "./CategoryCard.styled";

export const CategoryCard = ({ category, handleGoToCategory, isLarge }) => (
  <CategoryCardWrapper className={isLarge ? "large" : ""}>
    <CategoryImage src={category.img} alt={category.name} />
    <CategoryOverlay>
      <CategoryInfo>
        <h3>{category.name}</h3>
      </CategoryInfo>
      <IconArrow onClick={handleGoToCategory}>
        <ArrowUpIcon />
      </IconArrow>
    </CategoryOverlay>
  </CategoryCardWrapper>
);
