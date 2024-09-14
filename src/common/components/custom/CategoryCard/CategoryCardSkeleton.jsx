import { Skeleton } from "antd";
import React from "react";

import {
  CategoryCardWrapper,
  CategoryOverlay,
  StyledSkeleton,
} from "./CategoryCard.styled";

export const CategoryCardSkeleton = ({ isLarge }) => (
  <CategoryCardWrapper className={isLarge ? "large" : ""}>
    <StyledSkeleton />
    <CategoryOverlay>
      <Skeleton.Input active />
      <Skeleton.Avatar active size={32} />
    </CategoryOverlay>
  </CategoryCardWrapper>
);
