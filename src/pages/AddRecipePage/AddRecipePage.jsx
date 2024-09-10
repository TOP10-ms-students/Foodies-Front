import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  PageTitle,
  PageSubtitle,
  UploadPhoto,
  Input,
  Select,
  StepsRangeInput,
  BorderlessInput,
  BorderlessTextarea,
  Button,
  IngredientCard,
  DeleteIcon,
} from "~/common/components";

import { ROUTE_PATHS } from "~/routing/constants";

import {
  PageBox,
  FormBox,
  NameInpuBox,
  DescriptionInpuBox,
  NameInput,
  InputsBox,
  Label,
  IngredientsBox,
  ButtonsBox,
} from "./AddRecipePage.styled";
import { COOKING_TIME_OPTIONS } from "./helpers";

const BREADCRUMB_ITEMS = [
  { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
  { title: "Add Recipe" },
];

export const AddRecipePage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [cookingTime, setCookingTime] = useState(COOKING_TIME_OPTIONS[0].value);
  const [ingredients, setIngredients] = useState([]);

  return (
    <PageBox>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <PageTitle>Add Recipe</PageTitle>

      <PageSubtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </PageSubtitle>

      <FormBox>
        <UploadPhoto imageFile={imageFile} setImageFile={setImageFile} />

        <div>
          <NameInpuBox>
            <NameInput placeholder="The name of the recipe" width="100%" />
          </NameInpuBox>

          <DescriptionInpuBox>
            <BorderlessTextarea
              placeholder="Enter a description of the dish"
              width="100%"
              showCount
              maxLength={200}
            />
          </DescriptionInpuBox>

          <InputsBox>
            <div>
              <Label>Category</Label>
              <Select width="100%" />
            </div>

            <div>
              <Label>Cooking time</Label>
              <StepsRangeInput
                value={cookingTime}
                setValue={setCookingTime}
                options={COOKING_TIME_OPTIONS}
              />
            </div>

            <div>
              <Label>Ingredients</Label>
              <Select mode="multiple" width="100%" />
            </div>

            <BorderlessInput placeholder="Enter quantity" width="100%" />
          </InputsBox>

          <Button icon={<PlusOutlined />} iconPosition="end">
            Add ingredient
          </Button>

          <IngredientsBox>
            {ingredients.length === 0 && (
              <Typography.Text>No ingredients added</Typography.Text>
            )}

            {ingredients.map((ingredient, index) => (
              <IngredientCard
                key={index}
                title={ingredient.title}
                weight={ingredient.weight}
              />
            ))}
          </IngredientsBox>

          <Label>Recipe Preparation</Label>

          <BorderlessTextarea
            placeholder="Enter recipe"
            width="100%"
            showCount
            maxLength={200}
          />

          <ButtonsBox>
            <div>
              <Button icon={<DeleteIcon />} />
            </div>

            <Button type="primary">Publish</Button>
          </ButtonsBox>
        </div>
      </FormBox>
    </PageBox>
  );
};
