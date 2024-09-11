import { PlusOutlined } from "@ant-design/icons";
import { Typography, notification } from "antd";
import { useFormik } from "formik";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  PageTitle,
  PageSubtitle,
  UploadPhoto,
  Select,
  StepsRangeInput,
  BorderlessInput,
  BorderlessTextarea,
  Button,
  IngredientCard,
  DeleteIcon,
} from "~/common/components";

import { getAllCategories } from "~/api/categories";
import { getAllIngredients } from "~/api/ingredients";
import { createRecipe } from "~/api/recipes";

import { ROUTE_PATHS } from "~/routing/constants";

import { addRecipeSchema } from "~/common/validation/recipes";

import {
  PageBox,
  FormBox,
  NameInpuBox,
  DescriptionInpuBox,
  NameInput,
  InputsBox,
  CategoryBox,
  IngredientsInputsBox,
  QuantityInputBox,
  Label,
  IngredientsBox,
  IngredientsList,
  ButtonsBox,
} from "./AddRecipePage.styled";
import { COOKING_TIME_OPTIONS } from "./helpers";

const { Text } = Typography;

const BREADCRUMB_ITEMS = [
  { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
  { title: "Add Recipe" },
];

const INIT_VALUES = {
  name: "",
  description: "",
  category: null,
  ingredient: null,
  quantity: "",
  cookingTime: COOKING_TIME_OPTIONS[0].value,
  ingredients: [],
  preparation: "",
};

export const AddRecipePage = () => {
  const [notificationApi, notificationContext] = notification.useNotification();

  const [imageFile, setImageFile] = useState(null);
  const [isLoadingOptions, setIsLoadingOptions] = useState(false);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const { values, errors, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: INIT_VALUES,
      validationSchema: addRecipeSchema,
      onSubmit,
    });

  useEffect(() => {
    const loadOptions = async () => {
      try {
        setIsLoadingOptions(true);

        // eslint-disable-next-line no-undef
        const [categoriesRes, ingredientsRes] = await Promise.allSettled([
          getAllCategories(),
          getAllIngredients(),
        ]);

        categoriesRes.status === "fulfilled" &&
          setCategories(categoriesRes.value.data);
        ingredientsRes.status === "fulfilled" &&
          setIngredients(ingredientsRes.value.data);
      } catch ({ response: { data } }) {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      } finally {
        setIsLoadingOptions(false);
      }
    };

    loadOptions();
  }, []);

  const categoriesOptions = useMemo(
    () => categories.map(({ id, name }) => ({ value: id, label: name })),
    [categories]
  );

  const ingredientsOptions = useMemo(
    () => ingredients.map(({ id, name }) => ({ value: id, label: name })),
    [ingredients]
  );

  const onAddIngredient = () => {
    const ingredient = ingredients?.find((i) => i.id === values.ingredient);

    const newIngredient = {
      ...ingredient,
      quantity: values.quantity,
    };

    setFieldValue("ingredients", [...values.ingredients, newIngredient]);
    setFieldValue("ingredient", null);
    setFieldValue("quantity", null);
  };

  async function onSubmit(values) {
    try {
      /*

    ingredient: null;
    quantity: string;

      */
      console.log("onSubmit: ", values);

      const submitData = {
        title: values.name,
        category: values.category,
        description: values.description,
        instructions: values.preparation,
        //
        ingredients: values.ingredients,
        time: values.cookingTime,
      };
      /*

      area: Joi.string().required(),
      thumb: Joi.string().required(),

      */

      // createRecipe()
    } catch ({ response: { data } }) {
      const message = data?.message ?? "Something went wrong";
      notificationApi.error({ message });
    }
  }

  const disableAddIngredientBtn = !values.ingredient || !values.quantity;

  return (
    <PageBox>
      {notificationContext}

      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <PageTitle>Add Recipe</PageTitle>

      <PageSubtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </PageSubtitle>

      <form onSubmit={handleSubmit}>
        <FormBox>
          <UploadPhoto imageFile={imageFile} setImageFile={setImageFile} />

          <div>
            <NameInpuBox>
              <div>
                <NameInput
                  placeholder="The name of the recipe"
                  width="100%"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors?.name && <Text type="danger">{errors.name}</Text>}
              </div>
            </NameInpuBox>

            <DescriptionInpuBox>
              <div>
                <BorderlessTextarea
                  placeholder="Enter a description of the dish"
                  width="100%"
                  showCount
                  maxLength={200}
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                />
                {errors?.description && (
                  <Text type="danger">{errors.description}</Text>
                )}
              </div>
            </DescriptionInpuBox>

            <CategoryBox>
              <InputsBox>
                <div>
                  <Label>Category</Label>

                  <div>
                    <Select
                      width="100%"
                      options={categoriesOptions}
                      name="category"
                      onChange={(v) => setFieldValue("category", v)}
                      value={values.category}
                      disabled={isLoadingOptions}
                    />
                    {errors?.category && (
                      <Text type="danger">{errors.category}</Text>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Cooking time</Label>

                  <div>
                    <StepsRangeInput
                      options={COOKING_TIME_OPTIONS}
                      name="cookingTime"
                      setValue={(v) => setFieldValue("cookingTime", v)}
                      value={values.cookingTime}
                    />
                    {errors?.cookingTime && (
                      <Text type="danger">{errors.cookingTime}</Text>
                    )}
                  </div>
                </div>
              </InputsBox>
            </CategoryBox>

            <IngredientsInputsBox>
              <InputsBox>
                <div>
                  <Label>Ingredients</Label>

                  <div>
                    <Select
                      width="100%"
                      options={ingredientsOptions}
                      name="ingredient"
                      onChange={(v) => setFieldValue("ingredient", v)}
                      value={values.ingredient}
                      disabled={isLoadingOptions}
                    />
                  </div>
                </div>

                <QuantityInputBox>
                  <div>
                    <BorderlessInput
                      placeholder="Enter quantity"
                      width="100%"
                      name="quantity"
                      onChange={handleChange}
                      value={values.quantity}
                    />
                  </div>
                </QuantityInputBox>
              </InputsBox>
            </IngredientsInputsBox>

            <Button
              icon={<PlusOutlined />}
              iconPosition="end"
              onClick={onAddIngredient}
              disabled={disableAddIngredientBtn}
              //
            >
              Add ingredient
            </Button>

            <IngredientsBox>
              {values.ingredients.length === 0 && (
                <Text>No ingredients added</Text>
              )}

              <div>
                {errors?.ingredients && (
                  <Text type="danger">{errors.ingredients}</Text>
                )}
              </div>

              {values.ingredients.length > 0 && (
                <IngredientsList>
                  {values.ingredients.map((ingredient, index) => (
                    <IngredientCard
                      key={index}
                      imageSrc={ingredient.img}
                      title={ingredient.name}
                      weight={ingredient.quantity}
                    />
                  ))}
                </IngredientsList>
              )}
            </IngredientsBox>

            <Label>Recipe Preparation</Label>
            <div>
              <BorderlessTextarea
                placeholder="Enter recipe"
                width="100%"
                showCount
                maxLength={200}
                name="preparation"
                onChange={handleChange}
                value={values.preparation}
              />
              {errors?.preparation && (
                <Text type="danger">{errors.preparation}</Text>
              )}
            </div>

            <ButtonsBox>
              <div>
                <Button icon={<DeleteIcon />} />
              </div>

              <Button type="primary" htmlType="submit">
                Publish
              </Button>
            </ButtonsBox>
          </div>
        </FormBox>
      </form>
    </PageBox>
  );
};
