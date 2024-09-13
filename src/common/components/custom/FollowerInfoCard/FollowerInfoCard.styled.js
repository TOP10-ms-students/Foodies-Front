import { styled } from "styled-components";

import { Avatar, Button } from "~/common/components";

export const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserInfoBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const CustomAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 85px;
    height: 85px;
  }

  svg {
    width: 30px;
    height: 30px;

    @media ${({ theme }) => theme.media.tablet} {
      width: 45px;
      height: 45px;
    }
  }
`;

export const UserName = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.02em;
  margin-bottom: 4px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 20px;
  }
`;

export const UserDetail = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 30px !important;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray};
  padding: 8px 16px !important;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    line-height: 24px;
    padding: 10px 24px !important;
  }

  @media ${({ theme }) => theme.media.desktop} {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;

export const StyledArrowButton = styled(Button)`
  width: 36px !important;
  height: 36px !important;

  @media ${({ theme }) => theme.media.tablet} {
    width: 42px !important;
    height: 42px !important;
  }
`;

export const RecipesList = styled.ul`
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RecipeItem = styled.div`
  border-radius: 15px;
  width: 100px;
  height: 100px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
