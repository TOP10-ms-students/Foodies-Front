import { styled } from "styled-components";

export const RecipesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 40px;
  }
`;
