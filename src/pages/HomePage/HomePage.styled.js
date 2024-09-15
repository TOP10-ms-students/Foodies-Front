import { styled } from "styled-components";

export const CategoriesAndRecipesWrapper = styled.div`
  padding: 64px 0;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 100px 0;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 120px 0;
  }
`;
