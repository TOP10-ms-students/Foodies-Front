import { Divider } from "antd";
import { styled } from "styled-components";

export const RecipesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 40px;
  }
`;

export const FollowersDivider = styled(Divider)`
  margin: 20px 0;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 40px 0;
  }
`;
