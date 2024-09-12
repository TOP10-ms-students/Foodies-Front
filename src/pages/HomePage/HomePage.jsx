import React, {useState} from "react";
import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { Hero } from "~/common/components/custom/Hero";
import { RecipesList } from "~/common/components/custom/RecipesList";

import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";

export const HomePage = () => {
  const { categoryName, categoryId, setCategory, resetCategory } =
    useCategoriesQueries();
  const [error, setError] = useState(null);

  const handleError = (errorMessage) => {
    setError(errorMessage);
    resetCategory();
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      <Hero />

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          closable
          onClose={handleCloseError}
          style={{ marginBottom: 16 }}
        />
      )}

      {categoryName ? (
        <RecipesList
          category={{ name: categoryName, id: categoryId }}
          goToCategories={resetCategory}
          onError={handleError}
        />
      ) : (
        <CategoriesList setCategory={setCategory} />
      )}

      <section>
        <div>Info block</div>
      </section>
    </div>
  );
};