import { styled } from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 343px;
  height: 75px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 394px;
  }
`;

export const RecipeImage = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 15px;
`;

export const BoxInfoIcon = styled.div`
  display: flex;
`;

export const BoxInfo = styled.div`
  display: flex;
`;

export const RecipeTitle = styled.h2`
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const RecipeDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray};
  width: 166px;
  gap: 16px;
`;
