import styled from "styled-components";

export const PathInfo = styled.div``;

export const RecipeInfo = styled.div``;

export const Title = styled.h2`
  margin: 0;
  margin-top: 32px;
  font-weight: 800;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;

export const RecipeText = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.gray};
`;

export const RecipeMainInfo = styled.div`
  margin-top: 32px;
`;

export const RecipeImg = styled.img`
  display: block;
  width: 100%;
  height: 318px;
  border-radius: 30px;
`;

export const LabelsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-top: 20px;
  width: 145px;
  height: 38px;
`;

export const RecipeLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0 10px;
  height: 38px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.gray};
  border: 1px solid ${({ theme }) => theme?.colors?.gray};
`;

export const RecipeIngredients = styled.div`
  margin-top: 32px;
`;

export const RecipePreparation = styled.div`
  margin-top: 32px;

  button {
    border-radius: 30px;
    padding: 14px 20px;
    width: 172px;
    height: 48px;
    font-weight: 700;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme?.colors?.gray};
  }
`;

export const PopularRecipes = styled.div`
  margin-top: 64px;
`;
