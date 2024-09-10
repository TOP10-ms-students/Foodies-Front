import React from "react";

import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { RecipesList } from "~/common/components/custom/RecipesList";
import { Testimonials } from "~/common/components/custom/Testimonials";

import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";

export const HomePage = () => {
  const { category, setCategory, resetCategory } = useCategoriesQueries();

  return (
    <div>
      <div>Homepage Hero</div>

      {category ? (
        <RecipesList category={category} goToCategories={resetCategory} />
      ) : (
        <CategoriesList setCategory={setCategory} />
      )}

      <Testimonials />
    </div>
  );
};
