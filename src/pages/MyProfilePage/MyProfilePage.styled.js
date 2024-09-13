import { styled } from "styled-components";

export const PageBox = styled.div`
  padding: 126px 0 64px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 150px 0 100px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 170px 0 120px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding-top: 28px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 80px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    align-items: start;
    flex-direction: row;
    gap: 40px;
  }
`;

export const TabsBox = styled.div`
  @media ${({ theme }) => theme.media.desktop} {
    flex-grow: 2;
  }
`;
