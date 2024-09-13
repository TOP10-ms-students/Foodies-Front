import styled from "styled-components";

export const PathInfo = styled.div``;

export const RecipeInfo = styled.div``;

export const RecipeImg = styled.img`
  margin-top: 32px;
  display: block;
  width: 100%;
  height: 318px;
  border-radius: 30px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 704px;
    height: 400px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 551px;
    height: 400px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 32px;
  font-weight: 800;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
  }
`;

export const IngredientsBox = styled.div`
  margin-top: 32px;
`;

export const PopularRecipes = styled.div`
  margin-top: 64px;
`;
