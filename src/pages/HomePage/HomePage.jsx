import React from "react";
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
  const { category, setCategory, resetCategory } = useCategoriesQueries();

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

      {category ? (
        <RecipesList category={category} goToCategories={resetCategory} />
      ) : (
        <CategoriesList setCategory={setCategory} />
      )}

      <section>
        <Testimonials />
      </section>
    </div>
  );
};
