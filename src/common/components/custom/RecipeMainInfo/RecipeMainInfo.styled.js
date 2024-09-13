import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  margin-top: 32px;
  font-weight: 800;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
  }
`;

export const RecipeText = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.gray};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
`;

export const UserBtn = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 38px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme?.colors?.white};

  & > span {
    @media ${({ theme }) => theme.media.tablet} {
      width: 50px;
      height: 50px;

      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
`;

export const UserInfo = styled.div`
  margin-left: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.gray};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
  }
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
`;

export const LabelsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-top: 20px;
  width: 145px;
  height: 38px;
`;

export const RecipeLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0 10px;
  height: 38px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme?.colors?.gray};
  border: 1px solid ${({ theme }) => theme?.colors?.gray};
`;

export const RecipePreparation = styled.div`
  margin-top: 32px;

  button {
    border-radius: 30px;
    padding: 14px 20px;
    width: 172px;
    height: 48px;
    font-weight: 700;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme?.colors?.gray};

    @media ${({ theme }) => theme.media.tablet} {
      width: 215px;
      height: 56px;
      font-size: 16px;
    }
  }
`;
