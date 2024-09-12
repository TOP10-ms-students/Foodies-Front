import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CategoriesList } from "~/common/components/custom/CategoriesList";
import { RecipesList } from "~/common/components/custom/RecipesList";
import { useCategoriesQueries } from "~/common/hooks/useCategoriesQueries";
import { Button } from "~/common/components/ui/Button";
import SignInModal from "~/common/components/forms/LoginForm/SignInModal";
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
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddRecipeClick = () => {
    if (isAuthenticated) {
      navigate("/add-recipe");
    } else {
      setIsModalVisible(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsModalVisible(false);
    navigate("/add-recipe");
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
          <Button type="primary" onClick={handleAddRecipeClick}>
            Add Recipe
          </Button>
        </HeroContentBox>

        <HeroImagesBox>
          <HeroImage size="small" imageUrl={hero1} />
          <HeroImage size="large" imageUrl={hero2} />
        </HeroImagesBox>
      </HeroSection>

      <SignInModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSuccess={handleLoginSuccess}
      />

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
