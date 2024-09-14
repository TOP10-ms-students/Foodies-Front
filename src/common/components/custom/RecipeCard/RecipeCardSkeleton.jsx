import { Skeleton, Space } from "antd";
import React from "react";

import { HeartIcon, ArrowUpIcon } from "~/common/components/icons";

import {
  Card,
  SkeletonImage,
  Title,
  Description,
  Footer,
  Actions,
  FavoriteButton,
  ShareButton,
} from "./RecipeCard.styled";

export const RecipeCardSkeleton = () => (
  <Card>
    <SkeletonImage active />
    <>
      <Title>
        <Skeleton.Input active />
      </Title>

      <Title>
        <Skeleton.Input active />
      </Title>

      <Footer>
        <Space>
          <Skeleton.Avatar active size={32} />
          <Skeleton.Input active />
        </Space>

        <Actions>
          <FavoriteButton>
            <HeartIcon />
          </FavoriteButton>
          <ShareButton>
            <ArrowUpIcon />
          </ShareButton>
        </Actions>
      </Footer>
    </>
  </Card>
);
