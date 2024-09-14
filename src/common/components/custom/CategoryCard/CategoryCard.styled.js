import { Skeleton } from "antd";
import styled from "styled-components";

import { Button } from "~/common/components";

export const CategoryCardWrapper = styled.div`
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
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledSkeleton = styled(Skeleton.Image)`
  width: 100% !important;
  height: 100% !important;
`;
