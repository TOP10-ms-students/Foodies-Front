import React from "react";

import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { RecipesList } from "~/common/components/custom/RecipesList";

import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";

export const HomePage = () => {
  const { categoryName, categoryId, setCategory, resetCategory } =
    useCategoriesQueries();

  return (
    <div>
      <div>Homepage Hero</div>

      {categoryName ? (
        <RecipesList
          category={{ name: categoryName, id: categoryId }}
          goToCategories={resetCategory}
        />
      ) : (
        <CategoriesList setCategory={setCategory} />
      )}

      <div>Info block</div>
    </div>
  );
};
