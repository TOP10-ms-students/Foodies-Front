import styled from "styled-components";

export const Preparation = styled.div`
  margin-top: 32px;

  & > button {
    width: 250px;
  }
`;

export const RecipeText = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.gray};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
`;
