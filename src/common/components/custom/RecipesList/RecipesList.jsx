import React, { useState, useEffect } from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Pagination } from "~/common/components/custom/Pagination";
import { Select } from "~/common/components/ui/Select";
import { getRecipes } from "~/api/recipes";
import { getAllIngredients } from "~/api/ingredients";
import { getAllAreas } from "~/api/areas";
import {
  RecipesSection,
  BackButton,
  Description,
  RecipesWrapper,
  RecipeGrid,RecipesColumn,
  Filters,
} from "./RecipeList.styled";
import { PageTitle } from "~/common/components/ui/PageTitle";
import { ArrowLeftIcon } from "~/common/components/icons";

export const RecipesList = ({ category, goToCategories }) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [error, setError] = useState(null);
 
  const RECIPES_PER_PAGE = 12;

  const fetchRecipes = async (page = 1) => {
    setError(null);
    try {
      const response = await getRecipes({
          category: category.id,
          ingredient: selectedIngredient,
          area: selectedArea,
          page: page,
          limit: RECIPES_PER_PAGE,
      });

  
      if (response.data) {
        // setRecipes(response.data.recipes);
        // setTotalRecipes(response.data.totalCount);

        setRecipes(response.data);
        setTotalRecipes(20);

        setCurrentPage(page);
      } else {
        throw new Error("Invalid data format received from server");
      }
    } catch (error) {
      setError("Failed to fetch recipes. Please try again later.");
      setRecipes([]);
    } 
  };

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const ingredientsResponse = await getAllIngredients();
        const areasResponse = await getAllAreas();

        setIngredients(ingredientsResponse.data || []);
        setAreas(areasResponse.data.areas || []);
      } catch (error) {
        setError("Failed to fetch filters. Please try again later.");
      }
    };


    fetchFilters();
  }, []);

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
    <RecipesSection>
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
            placeholder="Select an ingredient"
            value={selectedIngredient}
            onChange={setSelectedIngredient}
          />
          <Select
            width={"330px"}
            options={areaOptions}
            placeholder="Select an area"
            value={selectedArea}
            onChange={setSelectedArea}
          />
        </Filters>

        {error && <div>{error}</div>}

        {!error && (
          <RecipesColumn>
            <RecipeGrid>
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))
              ) : (
                <p>No recipes found for this category.</p>
              )}
            </RecipeGrid>
            <Pagination
              current={currentPage}
              total={totalRecipes}
              pageSize={RECIPES_PER_PAGE}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper={true}
            />
          </RecipesColumn>
        )}
      </RecipesWrapper>
    </RecipesSection>
  );
};
