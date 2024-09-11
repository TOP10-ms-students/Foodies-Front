import { styled, css } from "styled-components";

const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLayoutHeader = styled.header`
  ${flexCenterBetween};
  padding: 0 16px;
  width: ${(theme) => theme?.media?.mobile};
  height: 38px;
  background-color: ${({ theme }) => theme?.colors?.black};

  & > a {
    font-weight: 800;
    font-size: 20px;
    color: ${({ theme }) => theme?.colors?.white};
    text-decoration: none;
  }

  & > div {
    color: ${({ theme }) => theme?.colors?.white};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 32px;
    & > div {
      font-size: 24px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 0 60px;
    height: 40px;
  }
`;

export const HeaderMenuWrapper = styled.div`
  ul {
    ${flexCenterBetween};
    width: 150px;
    flex-direction: row;
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    list-style: none;
    white-space: nowrap;

    li {
      padding-right: 30px;
      margin-left: 20px;

      a {
        padding: 9px;
        color: ${({ theme }) => theme?.colors?.white};
        background-color: ${({ theme }) => theme?.colors?.black};
        border-radius: 30px;
        text-decoration: none;
        &.active {
          border: 1px solid ${({ theme }) => theme?.colors?.white};
        }
      }
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
  }
  @media ${({ theme }) => theme.media.desktop} {
    ul > li > a {
      padding: 12px;
      margin-left: 40px;
    }
  }
`;

export const UserAuthButtons = styled.div`
  ${flexCenterBetween};
  height: 38px;
  border-radius: 30px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme?.colors?.white};

  button {
    width: 80px;
    height: 36px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 30px;
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
  ${flexCenterBetween};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 4px;
    border-radius: 30px;
    color: 1px solid ${({ theme }) => theme?.colors?.white};
    background-color: ${({ theme }) => theme?.colors?.darkgray};
    cursor: pointer;

    & > span {
      border: 1px solid ${({ theme }) => theme?.colors?.white};
    }
  }

  & > span {
    height: 28px;

    @media ${({ theme }) => theme.media.tablet} {
      display: none;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const UserName = styled.div`
  ${flexCenterBetween};
  padding: 6px;
  width: 90px;

  span {
    width: 56px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }

  svg {
    width: 16px;
    height: 10px;
  }
`;

export const UserPopUp = styled.ul`
  position: absolute;
  top: 42px;
  width: 122px;
  margin: 0;
  padding: 14px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  list-style: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme?.colors?.black};
  border: 1px solid ${({ theme }) => theme?.colors?.darkgray};

  li {
    padding: 2px;
    cursor: pointer;

    a {
      color: ${({ theme }) => theme?.colors?.white};
      text-decoration: none;
    }

    svg {
      padding-left: 4px;
      width: 14px;
      height: 14px;
    }
  }
`;
