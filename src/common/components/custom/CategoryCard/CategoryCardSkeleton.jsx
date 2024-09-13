import {
  CategoryCardWrapper,
  CategoryImage,
  CategoryOverlay,
  CategoryInfo,
} from "./CategoryCard.styled.jsx";

export const CategoryCardSkeleton = ({isLarge}) => {
  return (
    <CategoryCardWrapper className={isLarge ? "large" : ""}>
      <CategoryImage />
      <CategoryOverlay>
        <CategoryInfo>
          <h3></h3>
        </CategoryInfo>
      </CategoryOverlay>
    </CategoryCardWrapper>
  );
};
