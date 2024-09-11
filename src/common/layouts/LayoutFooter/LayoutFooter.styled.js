import { styled, css } from "styled-components";

export const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLayoutFooter = styled.footer`
  & > div {
    ${flexCenterBetween};

    a {
      font-weight: 800;
      font-size: 20px;
      color: ${({ theme }) => theme?.colors?.black};
      cursor: pointer;
      text-decoration: none;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 24px;
      }
    }
  }
`;

export const NetworkLinks = styled.ul`
  ${flexCenterBetween};
  width: 100%;
  max-width: 200px;
  height: 40px;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;

  li > a {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme?.colors?.black};
    background-color: ${({ theme }) => theme?.colors?.white};
    border: 1px solid ${({ theme }) => theme?.colors?.gray};
    border-radius: 50%;
    gap: 20px;

    svg {
      width: 20px !important;
      height: 20px;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme?.colors?.gray};
  margin: 40px 0;
`;

export const Copyright = styled.p`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px;
`;
