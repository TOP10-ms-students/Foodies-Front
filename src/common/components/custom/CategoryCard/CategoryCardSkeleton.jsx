import React from "react";

import {
  CategoryCardWrapper,
  CategoryImage,
  CategoryOverlay,
  CategoryInfo,
} from "./CategoryCard.styled";

export const CategoryCardSkeleton = ({ isLarge }) => (
  <CategoryCardWrapper className={isLarge ? "large" : ""}>
    <CategoryImage />
    <CategoryOverlay>
      <CategoryInfo>
        <h3></h3>
      </CategoryInfo>
    </CategoryOverlay>
  </CategoryCardWrapper>
);
