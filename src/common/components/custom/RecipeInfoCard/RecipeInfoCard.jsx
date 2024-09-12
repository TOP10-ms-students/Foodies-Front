import React from "react";

import {
  CardBox,
  RecipeImage,
  BoxInfoIcons,
  BoxInfo,
  BoxInfoTitle,
  RecipeTitle,
  RecipeDescription,
  WrapperIcon,
} from "./RecipeInfoCard.styled";
import { ArrowUpIcon, DeleteIcon } from "../../icons/icons";

export const RecipeInfoCard = () => (
  <CardBox>
    <RecipeImage src={null} alt="Recipe's photo" />
    <BoxInfo>
      <BoxInfoTitle>
        <RecipeTitle>Chilli prawn linguine</RecipeTitle>
        <RecipeDescription>
          Mix the dressing ingredients in a small bowl and season with salt and
          pepper. Set aside.\r\n\r\nCook the pasta according to the packet
          instructions. Add the sugar snap peas for the last minute or so of
          cooking time.
        </RecipeDescription>
      </BoxInfoTitle>
      <BoxInfoIcons>
        <WrapperIcon>
          <ArrowUpIcon />
        </WrapperIcon>
        <WrapperIcon>
          <DeleteIcon />
        </WrapperIcon>
      </BoxInfoIcons>
    </BoxInfo>
  </CardBox>
);
