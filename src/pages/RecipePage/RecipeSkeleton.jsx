import { Skeleton, Space } from "antd";
import React from "react";

import { Box } from "~/common/components/custom/PopularRecipes/PopularRecipes.styled";
import { SkeletonImage } from "~/common/components/custom/RecipeCard/RecipeCard.styled";
import { RecipeCardSkeleton } from "~/common/components/custom/RecipeCard/RecipeCardSkeleton";
import {
  RecipeText,
  Title,
} from "~/common/components/custom/RecipeMainInfo/RecipeMainInfo.styled";
import { RecipeGrid } from "~/common/components/custom/RecipesList/RecipeList.styled";

import { FormBox } from "../AddRecipePage/AddRecipePage.styled";

export const RecipeSkeleton = () => (
  <FormBox>
    <SkeletonImage active />

    <Box>
      <Box>
        <Title>
          <Skeleton.Input active />
        </Title>
        <RecipeText>
          <Skeleton.Input active style={{ width: 360 }} />
        </RecipeText>
      </Box>

      <Box>
        <Space>
          <Skeleton.Avatar active size={32} />
          <Skeleton.Input active />
        </Space>
      </Box>

      <Box>
        <RecipeGrid>
          {Array(4)
            .fill()
            .map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
        </RecipeGrid>
      </Box>
    </Box>
  </FormBox>
);
