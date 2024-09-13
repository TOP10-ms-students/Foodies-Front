import styled from "styled-components";

export const RecipesSection = styled.div``;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  max-width: 540px;
`;

export const RecipesWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;

export const RecipeGrid = styled.div`
  display: flex;
  row-gap: 40px;
  column-gap: 20px;
  flex-wrap: wrap;
`;

export const RecipesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 70px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 910px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
    justify-content: start;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  margin-bottom: 5px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
