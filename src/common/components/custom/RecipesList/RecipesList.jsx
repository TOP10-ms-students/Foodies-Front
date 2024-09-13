import { Spin } from "antd";
import debounce from "lodash/debounce";
import React, { useState, useEffect, useRef, useMemo } from "react";

import { PageTitle, Select } from "~/common/components";
import { ArrowLeftIcon } from "~/common/components/icons";
import { Pagination } from "~/common/components/ui/Pagination";

import { getAllAreas } from "~/api/areas";
import { getIngredients } from "~/api/ingredients";
import { getRecipes } from "~/api/recipes";

import {
  RecipesSection,
  BackButton,
  Description,
  RecipesWrapper,
  RecipeGrid,
  RecipesColumn,
  Filters,
} from "./RecipeList.styled";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { RecipeCardSkeleton } from "../RecipeCard/RecipeCardSkeleton";

export const RecipesList = ({ category, goToCategories, onError }) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredientsOptions, setIngredientsOptions] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [isLoadingIngredients, setIsLoadingIngredients] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const topRef = useRef(null);

  const RECIPES_PER_PAGE = 12;

  const fetchRecipes = async (page = 1) => {
    setIsLoading(true);
    try {
      const params = {
        category: category.id,
        page: page,
        ingredient: selectedIngredient,
        area: selectedArea,
        limit: RECIPES_PER_PAGE,
      };

      const response = await getRecipes(params);

      setRecipes(response.data.recipes);
      setTotalRecipes(response.data.count);
      setCurrentPage(page);

      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      onError("Failed to fetch recipes. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        // const ingredientsResponse = await getAllIngredients();
        const areasResponse = await getAllAreas();

        // setIngredients(ingredientsResponse.data.ingredients || []);
        setAreas(areasResponse.data.areas || []);
      } catch (error) {
        onError("Failed to fetch filters. Please try again later.");
      }
    };

    fetchFilters();
  }, [onError]);

  useEffect(() => {
    if (category) {
      fetchRecipes(1);
    }
  }, [category, selectedIngredient, selectedArea]);

  const handlePageChange = (page) => {
    fetchRecipes(page);
  };

  const fetchRef = useRef(null);

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
          })) ?? []
        );
        setIsLoadingIngredients(false);
      });
    };

    return debounce(loadOptions, 500);
  }, []);

  const areaOptions = areas.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <RecipesSection ref={topRef}>
      <BackButton onClick={goToCategories}>
        <ArrowLeftIcon />
        Back
      </BackButton>
      <PageTitle>{category.name}</PageTitle>
      <Description>
        Go on a taste journey, where every sip is a sophisticated creative
        chord, and every dessert is an expression of the most refined
        gastronomic desires.
      </Description>
      <RecipesWrapper>
        <Filters>
          <Select
            width="330px"
            allowClear
            options={ingredientsOptions}
            placeholder="Ingredients"
            value={selectedIngredient}
            onChange={setSelectedIngredient}
            notFoundContent={
              isLoadingIngredients ? <Spin size="small" /> : null
            }
            filterOption={false}
            showSearch
            onSearch={debounceIngredientsFetcher}
          />
          <Select
            width="330px"
            allowClear
            options={areaOptions}
            placeholder="Areas"
            value={selectedArea}
            onChange={setSelectedArea}
          />
        </Filters>

        <RecipesColumn>
          <RecipeGrid>
            {isLoading ? (
              Array(RECIPES_PER_PAGE)
                .fill()
                .map((_, index) => <RecipeCardSkeleton key={index} />)
            ) : recipes.length > 0 ? (
              recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p>No recipes found for this category.</p>
            )}
          </RecipeGrid>
          {totalRecipes > RECIPES_PER_PAGE && (
            <Pagination
              current={currentPage}
              total={totalRecipes}
              pageSize={RECIPES_PER_PAGE}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper
            />
          )}
        </RecipesColumn>
      </RecipesWrapper>
    </RecipesSection>
  );
};