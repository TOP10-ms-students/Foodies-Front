import { styled } from "styled-components";

export const CardBox = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(100vw - 32px);
  height: 75px;
  gap: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 704px;
    height: 100px;
    gap: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 846px;
  }
`;

export const RecipeImage = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
  border-radius: 15px;
  object-fit: cover;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100px;
    height: 100px;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 2;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.tablet} {
    width: 588px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 730px;
  }
`;

export const BoxInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 10px;
  }
`;

export const RecipeTitle = styled.h2`
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  max-width: calc(100vw - 200px);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: unset;
    font-size: 20px;
    margin-bottom: 10px;
    width: 468px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 610px;
  }
`;

export const RecipeDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray};
  max-width: calc(100vw - 200px);
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: unset;
    font-size: 16px;
    line-height: 24px;
    width: 468px;
    color: ${({ theme }) => theme.colors.black};
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 610px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const BoxInfoIcons = styled.div`
  display: flex;
  gap: 4px;
`;

export const WrapperIcon = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;

  svg {
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 40px;
    height: 40px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
