import { styled } from "styled-components";

export const PageContainer = styled.div`
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media ${({ theme }) => theme.media.mobile} {
    max-width: ${({ theme }) => theme.sizes.mobile};
  }

  @media ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.sizes.tablet};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.sizes.desktop};
    padding-left: 32px;
    padding-right: 32px;
  }
`;
