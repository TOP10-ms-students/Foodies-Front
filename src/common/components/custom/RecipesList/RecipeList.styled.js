import styled from "styled-components";


export const RecipesSection = styled.div`
  /* padding: 20px; */
`;

export const BackButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
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
  align-items: center;

  @media ${({ theme }) => theme.media.desktop} {
    width: 910px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
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
