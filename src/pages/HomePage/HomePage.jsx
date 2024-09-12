import React, {useState} from "react";
import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { RecipesList } from "~/common/components/custom/RecipesList";
import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";
import { Button } from "~/common/components/ui/Button";
import hero1 from "~/common/components/img/hero1_x2.jpg";
import hero2 from "~/common/components/img/hero2_x2.jpg";
import {
  HeroSection,
  HeroContentBox,
  HeroTitle,
  HeroSubtitle,
  HeroImagesBox,
  HeroImage,
} from "./HomePage.styled";

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
      <HeroSection>
        <HeroContentBox>
          <HeroTitle>Improve Your Culinary Talents</HeroTitle>
          <HeroSubtitle>
            Amazing recipes for beginners in the world of cooking, enveloping
            you in the aromas and tastes of various cuisines.
          </HeroSubtitle>
          <Button type="primary">Add recipe</Button>
        </HeroContentBox>

        <HeroImagesBox>
          <HeroImage size="small" imageUrl={hero1} />
          <HeroImage size="large" imageUrl={hero2} />
        </HeroImagesBox>
      </HeroSection>

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