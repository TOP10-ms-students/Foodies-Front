import { PlusOutlined } from "@ant-design/icons";
import { Typography, notification, Spin, Tooltip } from "antd";
import { useFormik } from "formik";
import debounce from "lodash/debounce";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
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
  PathInfo,
} from "~/common/components";

import { getAllAreas } from "~/api/areas";
import { getAllCategories } from "~/api/categories";
import { getIngredients } from "~/api/ingredients";
import { createRecipe } from "~/api/recipes";

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

const ErrorMessage = ({ errors, touched, name }) =>
  errors?.[name] &&
  touched?.[name] && <Text type="danger">{errors[name]}</Text>;

const INIT_VALUES = {
  name: "",
  description: "",
  area: null,
  category: null,
  ingredient: null,
  quantity: "",
  cookingTime: COOKING_TIME_OPTIONS[0].value,
  ingredients: [],
  preparation: "",
};

export const AddRecipePage = () => {
  const navigate = useNavigate();
  const [notificationApi, notificationContext] = notification.useNotification();

  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isLoadingAreas, setIsLoadingAreas] = useState(false);
  const [isLoadingIngredients, setIsLoadingIngredients] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ingredientsOptions, setIngredientsOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  const [imageFile, setImageFile] = useState(null);

  const {
    values,
    errors,
    setFieldValue,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
    dirty,
  } = useFormik({
    initialValues: INIT_VALUES,
    validationSchema: addRecipeSchema,
    onSubmit,
  });

  useEffect(() => {
    setIsLoadingCategories(true);
    getAllCategories()
      .then(({ data }) => setCategories(data?.categories ?? []))
      .catch(({ response: { data } }) => {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      })
      .finally(() => setIsLoadingCategories(false));
  }, []);

  useEffect(() => {
    setIsLoadingAreas(true);
    getAllAreas()
      .then(({ data }) => setAreas(data?.areas ?? []))
      .catch(({ response: { data } }) => {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      })
      .finally(() => setIsLoadingAreas(false));
  }, []);

  const categoriesOptions = useMemo(
    () => categories?.map(({ id, name }) => ({ value: id, label: name })),
    [categories]
  );

  const areasOptions = useMemo(
    () => areas?.map(({ id, name }) => ({ value: id, label: name })),
    [areas]
  );

  const onChangeIngredient = (o) => {
    const ingredient = ingredientsOptions.find((i) => i.value === o.value);
    setFieldValue("ingredient", ingredient);
  };

  const onRemoveIngredient = (key) => {
    setFieldValue(
      "ingredients",
      values.ingredients.filter((i) => i.value !== key)
    );
  };

  const onAddIngredient = () => {
    const newIngredient = {
      ...values.ingredient,
      quantity: values.quantity,
    };

    setFieldValue("ingredients", [...values.ingredients, newIngredient]);
    setFieldValue("ingredient", null);
    setFieldValue("quantity", null);
  };

  const fetchRef = useRef(0);

  const debounceIngredientsFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;

      const fetchId = fetchRef.current;
      setIngredientsOptions([]);
      setIsLoadingIngredients(true);

      getIngredients(value).then(({ data }) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setIngredientsOptions(
          data?.ingredients?.map(({ id, name, img }) => ({
            value: id,
            label: name,
            img,
          })) ?? []
        );
        setIsLoadingIngredients(false);
      });
    };

    return debounce(loadOptions, 500);
  }, []);

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      if (!imageFile) {
        notificationApi.error({ message: "Please upload an image" });
        return;
      }

      const formdata = new FormData();
      formdata.append("title", values.name);
      formdata.append("thumb", imageFile, imageFile.name);
      formdata.append("categoryId", values.category);
      formdata.append("areaId", values.area);
      formdata.append("instructions", values.preparation);
      formdata.append("description", values.description);
      formdata.append("time", values.cookingTime * 60);

      values.ingredients.forEach(({ value, quantity }, index) => {
        formdata.append(`ingredients[${index}][ingredientId]`, value);
        formdata.append(`ingredients[${index}][measure]`, quantity);
      });

      const { data } = await createRecipe(formdata);

      notificationApi.success({ message: "Recipe created successfully!" });

      navigate(`/recipe/${data.recipe.id}`);
    } catch ({ response: { data } }) {
      const message = data?.message ?? "Something went wrong";
      notificationApi.error({ message });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleReset = () => {
    setImageFile(null);
    resetForm();
  };

  const disableResetBtn = !dirty && !imageFile;

  const disableAddIngredientBtn = !values.ingredient || !values.quantity;

  return (
    <PageBox>
      {notificationContext}

      <PathInfo title="Add Recipe" />

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
                <ErrorMessage errors={errors} touched={touched} name="name" />
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
                <ErrorMessage
                  errors={errors}
                  touched={touched}
                  name="description"
                />
              </div>
            </DescriptionInpuBox>

            <DescriptionInpuBox>
              <Label>Area</Label>

              <div>
                <Select
                  width="100%"
                  options={areasOptions}
                  name="area"
                  onChange={(v) => setFieldValue("area", v)}
                  value={values.area}
                  notFoundContent={
                    isLoadingAreas ? <Spin size="small" /> : null
                  }
                />
                <ErrorMessage errors={errors} touched={touched} name="area" />
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
                      notFoundContent={
                        isLoadingCategories ? <Spin size="small" /> : null
                      }
                    />
                    <ErrorMessage
                      errors={errors}
                      touched={touched}
                      name="category"
                    />
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
                    <ErrorMessage
                      errors={errors}
                      touched={touched}
                      name="cookingTime"
                    />
                  </div>
                </div>
              </InputsBox>
            </CategoryBox>

            <IngredientsInputsBox>
              <InputsBox>
                <div>
                  <Label>Ingredients</Label>

                  <Select
                    labelInValue
                    value={values.ingredient}
                    onChange={onChangeIngredient}
                    notFoundContent={
                      isLoadingIngredients ? <Spin size="small" /> : null
                    }
                    filterOption={false}
                    showSearch
                    onSearch={debounceIngredientsFetcher}
                    width="100%"
                    options={ingredientsOptions}
                    name="ingredient"
                  />
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
            >
              Add ingredient
            </Button>

            <IngredientsBox>
              {values.ingredients.length === 0 && (
                <Text>No ingredients added</Text>
              )}

              <div>
                <ErrorMessage
                  errors={errors}
                  touched={touched}
                  name="ingredients"
                />
              </div>

              {values.ingredients.length > 0 && (
                <IngredientsList>
                  {values.ingredients.map((ingredient, index) => (
                    <IngredientCard
                      key={index}
                      imageSrc={ingredient.img}
                      title={ingredient.label}
                      weight={ingredient.quantity}
                      onDelete={() => onRemoveIngredient(ingredient.value)}
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
              <ErrorMessage
                errors={errors}
                touched={touched}
                name="preparation"
              />
            </div>

            <ButtonsBox>
              <Tooltip title={!disableResetBtn && "Reset form"}>
                <Button
                  icon={<DeleteIcon />}
                  disabled={disableResetBtn}
                  onClick={handleReset}
                />
              </Tooltip>

              <Button type="primary" htmlType="submit">
                Publish
              </Button>
            </ButtonsBox>
          </div>
        </FormBox>
      </form>

      {isSubmitting && <Spin fullscreen />}
    </PageBox>
  );
};
