import styled from "styled-components";

export const CategoriesSection = styled.div``;

export const Description = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};

  @media ${({ theme }) => theme.media.tablet} {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    line-height: 24px;
    max-width: 531px;
    margin-bottom: 40px;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media ${({ theme }) => theme.media.tablet} {
    gap: 20px;
    grid-auto-flow: dense;
  }
`;

export const CategoryCard = styled.div`
  height: 250px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &.large {
    @media ${({ theme }) => theme.media.tablet} {
      grid-column: span 2;
      grid-row: span 1;
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    height: 369px;
  }
`;

export const AllCategoriesCard = styled(CategoryCard)`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AllCategoriesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h3 {
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: left;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }
`;
