import { notification, Spin } from "antd";
import React, { useEffect, useState } from "react";

import { SmallRecipeCard } from "~/common/components/custom/SmallRecipeCard";
import { RecipesList } from "~/common/components/custom/TabsList/TabsList.styled";
import { Pagination } from "~/common/components/ui/Pagination";

import { getRecipes } from "~/api/recipes";

import { SMALL_ITEMS_PER_PAGE } from "~/constants/paginationConstants";

export const RecipesTab = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [notificationApi] = notification.useNotification();

  const handleCurrentPageChange = (newPage) => setCurrentPage(newPage);

  const fetchRecipes = async () => {
    setLoading(true);

    try {
      const { data } = await getRecipes({
        owner: userId,
        page: currentPage,
        limit: SMALL_ITEMS_PER_PAGE,
      });

      setRecipes(data.recipes);
      setTotalItems(data.count);
    } catch (error) {
      notificationApi.error({
        message: "Error",
        description: error.message || "Failed to delete recipe.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [userId, currentPage]);

  return (
    <>
      {loading && <Spin size="large" />}
      {!loading && (
        <RecipesList>
          {recipes.length ? (
            recipes.map((recipe) => (
              <SmallRecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found.</p>
          )}
          <Pagination
            current={currentPage}
            total={totalItems}
            pageSize={SMALL_ITEMS_PER_PAGE}
            onChange={handleCurrentPageChange}
            showSizeChanger={false}
            showQuickJumper
          />
        </RecipesList>
      )}
    </>
  );
};
