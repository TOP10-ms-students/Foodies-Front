import React from "react";

import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { Hero } from "~/common/components/custom/Hero";
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
import { Testimonials } from "~/common/components/custom/Testimonials";

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
        <Testimonials />
      </section>
    </div>
  );
};
