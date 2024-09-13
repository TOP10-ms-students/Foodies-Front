import React from "react";
import { ArrowUpIcon } from "~/common/components/icons";
import {
   CategoryCardWrapper,
   CategoryImage,
   CategoryOverlay,
   CategoryInfo,
   IconArrow,
 } from "./CategoryCard.styled.jsx";
 
export const CategoryCard = ({ category, onClick, isLarge }) => (
  <CategoryCardWrapper className={isLarge ? "large" : ""}>
    <CategoryImage src={category.img} alt={category.name} />
    <CategoryOverlay>
      <CategoryInfo>
        <h3>{category.name}</h3>
      </CategoryInfo>
      <IconArrow onClick={() => onClick(category)}>
        <ArrowUpIcon />
      </IconArrow>
    </CategoryOverlay>
  </CategoryCardWrapper>
);
