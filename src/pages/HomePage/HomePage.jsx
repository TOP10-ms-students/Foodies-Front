import React from "react";

import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { Hero } from "~/common/components/custom/Hero";
import { RecipesList } from "~/common/components/custom/RecipesList";

import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";

export const HomePage = () => {
  const { category, setCategory, resetCategory } = useCategoriesQueries();

  return (
    <div>
      <Hero />

      {category ? (
        <RecipesList category={category} goToCategories={resetCategory} />
      ) : (
        <CategoriesList setCategory={setCategory} />
      )}

      <section>
        <div>Info block</div>
      </section>
    </div>
  );
};
