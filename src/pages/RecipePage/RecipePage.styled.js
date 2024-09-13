import styled from "styled-components";

export const PathInfo = styled.div``;

export const RecipeInfo = styled.div``;

export const RecipeImg = styled.img`
  margin-top: 32px;
  display: block;
  width: 100%;
  height: 318px;
  border-radius: 30px;
  object-fit: cover;

  @media ${({ theme }) => theme.media.tablet} {
    width: 704px;
    height: 400px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 551px;
    height: 400px;
  }
`;

export const IngredientsBox = styled.div`
  margin-top: 32px;
`;
