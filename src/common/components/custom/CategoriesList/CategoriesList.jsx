import React, { useState, useEffect } from "react";
import {
  CategoriesSection,
  Description,
  CategoriesGrid,
  CategoryCard,
  CategoryImage,
  CategoryOverlay,
  CategoryInfo,
  IconArrow,
  AllCategoriesCard,
  AllCategoriesContent,
} from "./CategoriesList.styled.js";
import { ArrowUpIcon } from "~/common/components/icons";
import img from "/Beef.png";
import { getAllCategories } from "~/api/categories";
import { PageTitle } from "~/common/components/ui/PageTitle";
export const CategoriesList = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState();
  const initialCategoriesCount = 11;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response.data.categories);
      } catch (error) {
        setError(error);
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
        onClick={() => handleCategoryClick(category)}
        className={isLarge(index) ? "large" : ""}
      >
        <CategoryImage src={img} alt={category.name} />
        <CategoryOverlay>
          <CategoryInfo>
            <h3>{category.name}</h3>
          </CategoryInfo>
          <IconArrow>
            <ArrowUpIcon />
          </IconArrow>
        </CategoryOverlay>
      </CategoryCard>
    );
  };
    if (error) {
        return <div>{error}</div>
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
        {categories.slice(0, initialCategoriesCount).map(renderCategoryCard)}
        <AllCategoriesCard onClick={handleToggleExpand}>
          <AllCategoriesContent>
            <h3>{expanded ? "LESS CATEGORIES" : "ALL CATEGORIES"}</h3>
          </AllCategoriesContent>
        </AllCategoriesCard>
        {expanded &&
          categories.slice(initialCategoriesCount).map(renderCategoryCard)}
      </CategoriesGrid>
    </CategoriesSection>
  );
};
