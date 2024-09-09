import { Typography } from "antd";
import { styled } from "styled-components";

export const Box = styled.div`
  padding: 40px 6px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 60px 56px;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 40px;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 40px;
  }
`;

export const SecondaryAction = styled(Typography)`
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray};
  margin: 16px auto 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 20px auto 0 auto;
  }
`;

export const Link = styled(Typography.Text)`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
