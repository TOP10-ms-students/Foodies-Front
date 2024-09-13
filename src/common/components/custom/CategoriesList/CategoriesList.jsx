import React, { useState, useEffect } from "react";

import {
  CategoryCard,
  CategoryCardSkeleton,
} from "~/common/components/custom/CategoryCard";
import { PageTitle } from "~/common/components/ui/PageTitle";

import { getAllCategories } from "~/api/categories";

import {
  CategoriesSection,
  Description,
  CategoriesGrid,
  AllCategoriesCard,
  AllCategoriesContent,
} from "./CategoriesList.styled.js";

export const CategoriesList = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const initialCategoriesCount = 11;

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await getAllCategories();
        setCategories(response.data.categories);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderCategoryCard = (category, index) => {
    const isLarge = (index) => {
      const rowIndex = Math.floor(index / 3);
      return index % 3 === rowIndex % 3;
    };

    return (
      <CategoryCard
        key={category.id}
        category={category}
        onClick={handleCategoryClick}
        isLarge={isLarge(index)}
      />
    );
  };

  const renderSkeletonCard = (index) => {
    const isLarge = (index) => {
      const rowIndex = Math.floor(index / 3);
      return index % 3 === rowIndex % 3;
    };

    return <CategoryCardSkeleton key={index} isLarge={isLarge(index)} />;
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <CategoriesSection>
      <PageTitle>CATEGORIES</PageTitle>
      <Description>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style, and the warm atmosphere of the
        kitchen.
      </Description>
      <CategoriesGrid>
        {isLoading
          ? Array(initialCategoriesCount)
              .fill()
              .map((_, index) => renderSkeletonCard(index))
          : categories.slice(0, initialCategoriesCount).map(renderCategoryCard)}
        <AllCategoriesCard onClick={handleToggleExpand}>
          <AllCategoriesContent>
            <h3>{expanded ? "LESS CATEGORIES" : "ALL CATEGORIES"}</h3>
          </AllCategoriesContent>
        </AllCategoriesCard>
        {expanded &&
          !isLoading &&
          categories.slice(initialCategoriesCount).map(renderCategoryCard)}
      </CategoriesGrid>
    </CategoriesSection>
  );
};
