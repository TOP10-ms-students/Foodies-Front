import React, { useState, useEffect, useRef } from "react";

import { PageTitle } from "~/common/components";
import { ArrowLeftIcon } from "~/common/components/icons";
import { Pagination } from "~/common/components/ui/Pagination";
import { Select } from "~/common/components/ui/Select";

import { getAllAreas } from "~/api/areas";
import { getAllIngredients } from "~/api/ingredients";
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
  const [ingredients, setIngredients] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecipes, setTotalRecipes] = useState(0);
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
        const ingredientsResponse = await getAllIngredients();
        const areasResponse = await getAllAreas();

        setIngredients(ingredientsResponse.data.ingredients || []);
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

  const ingredientOptions = [
    { value: "", label: "Ingredients" },
    ...ingredients.map((ingredient) => ({
      value: ingredient.id,
      label: ingredient.name,
    })),
  ];

  const areaOptions = [
    { value: "", label: "Areas" },
    ...areas.map((area) => ({ value: area.id, label: area.name })),
  ];

  return (
    <RecipesSection ref={topRef}>
      <ArrowLeftIcon />
      <BackButton onClick={goToCategories}>Back</BackButton>
      <PageTitle>{category.name}</PageTitle>
      <Description>
        Go on a taste journey, where every sip is a sophisticated creative
        chord, and every dessert is an expression of the most refined
        gastronomic desires.
      </Description>
      <RecipesWrapper>
        <Filters>
          <Select
            width={"330px"}
            options={ingredientOptions}
            placeholder="Ingredient"
            value={selectedIngredient}
            onChange={setSelectedIngredient}
          />
          <Select
            width={"330px"}
            options={areaOptions}
            placeholder="Area"
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
              showQuickJumper={true}
            />
          )}
        </RecipesColumn>
      </RecipesWrapper>
    </RecipesSection>
  );
};
