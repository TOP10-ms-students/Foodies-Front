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
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 20px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 20px;
  }
`;

export const SeccondaryAction = styled(Typography)`
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto 32px auto;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 auto 40px auto;
  }
`;
