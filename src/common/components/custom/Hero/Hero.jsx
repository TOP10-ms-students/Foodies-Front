import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import hero1 from "~/common/components/img/hero1_x2.jpg";
import hero2 from "~/common/components/img/hero2_x2.jpg";
import { Button } from "~/common/components/ui/Button";

import { getIsAuthenticated } from "~/store/selectors";

import { ROUTE_PATHS } from "~/routing/constants";

import {
  HeroSection,
  HeroContentBox,
  HeroTitle,
  HeroSubtitle,
  HeroImagesBox,
  HeroImage,
} from "./Hero.styled";

export const Hero = ({ openLoginModal }) => {
  const isAuth = useSelector(getIsAuthenticated);

  return (
    <HeroSection>
      <HeroContentBox>
        <HeroTitle>Improve Your Culinary Talents</HeroTitle>
        <HeroSubtitle>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </HeroSubtitle>

        {isAuth ? (
          <Link to={ROUTE_PATHS.ADD_RECIPE}>
            <Button type="primary">Add recipe</Button>
          </Link>
        ) : (
          <Button type="primary" onClick={openLoginModal}>
            Add recipe
          </Button>
        )}
      </HeroContentBox>

      <HeroImagesBox>
        <HeroImage size="small" imageUrl={hero1} />
        <HeroImage size="large" imageUrl={hero2} />
      </HeroImagesBox>
    </HeroSection>
  );
};
