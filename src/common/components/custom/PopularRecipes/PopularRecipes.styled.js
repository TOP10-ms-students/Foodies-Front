import styled from "styled-components";

export const Box = styled.div`
  margin-top: 64px;
`;

export const Title = styled.h2`
  margin: 0;
  margin: 32px 0;
  font-weight: 800;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
  }
`;
