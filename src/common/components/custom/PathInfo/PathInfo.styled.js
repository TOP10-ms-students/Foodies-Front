import styled from "styled-components";

export const Box = styled.div`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 40px;
  }
`;
