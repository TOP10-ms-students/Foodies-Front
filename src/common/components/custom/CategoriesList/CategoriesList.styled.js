import styled from "styled-components";

export const CategoriesSection = styled.div`
  text-align: left;
`;

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
  cursor: pointer;

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

  @media ${({ theme }) => theme.media.desktop} {
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CategoryInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  border-radius: 30px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};

  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    font-size: 18px;
  }
`;

export const IconArrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  color: white;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const AllCategoriesCard = styled(CategoryCard)`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
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
