import { notification } from "antd";
import React, { useMemo } from "react";

import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { Hero } from "~/common/components/custom/Hero";
import { RecipesList } from "~/common/components/custom/RecipesList";
import { Testimonials } from "~/common/components/custom/Testimonials";

import { useAuthModals } from "~/common/hooks/useAuthModals";
import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";

import { CategoriesAndRecipesWrapper } from "./HomePage.styled";

export const HomePage = () => {
  const [notificationApi, notificationContext] = notification.useNotification();
  const { categoryName, categoryId, setCategory, resetCategory } =
    useCategoriesQueries();
  const { handleOpenLogin } = useAuthModals();

  const handleError = (errorMessage) => {
    notificationApi.error({ message: errorMessage, duration: null });
    resetCategory();
  };

  const category = useMemo(
    () => ({ name: categoryName, id: categoryId }),
    [categoryName, categoryId]
  );

  return (
    <div>
      {notificationContext}

      <Hero openLoginModal={handleOpenLogin} />

      <CategoriesAndRecipesWrapper>
        {categoryName ? (
          <RecipesList
            category={category}
            goToCategories={resetCategory}
            onError={handleError}
            openLoginModal={handleOpenLogin}
          />
        ) : (
          <CategoriesList setCategory={setCategory} />
        )}
      </CategoriesAndRecipesWrapper>

      <section>
        <Testimonials />
      </section>
    </div>
  );
};
