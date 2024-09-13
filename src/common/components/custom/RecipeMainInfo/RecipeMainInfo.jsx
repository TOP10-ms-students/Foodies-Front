import React from "react";
import {
  LabelsBox,
  RecipeLabel,
  RecipeText,
  Title,
  UserBtn,
  UserInfo,
  UserName,
} from "./RecipeMainInfo.styled";
import { Avatar } from "../../ui/Avatar";

export const RecipeMainInfo = ({
  title,
  categoryName,
  time,
  description,
  ownerAvatar,
  ownerName,
}) => {
  return (
    <>
      <Title>{title}</Title>

      <LabelsBox>
        <RecipeLabel>{categoryName}</RecipeLabel>
        <RecipeLabel>{time} min</RecipeLabel>
      </LabelsBox>

      <RecipeText>{description}</RecipeText>

      <UserBtn>
        <Avatar src={ownerAvatar} />
        <UserInfo>
          Created by:
          <UserName>{ownerName}</UserName>
        </UserInfo>
      </UserBtn>
    </>
  );
};
