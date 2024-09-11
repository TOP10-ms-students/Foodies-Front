import styled from "styled-components";
import { QuotesIcon } from "~/common/components/icons";

export const TestimonialsSection = styled.div`
  height: 100%;
  position: relative;
  max-width: 343px;
  margin: 0 auto;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 704px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 822px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0 12px 0;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 58px 0;
  font-size: 28px;
  font-weight: 800;
  line-height: 44px;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 40px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 84px;
  left: 8px;
  width: 40px;
  height: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    top: 76px;
    left: 40px;
    width: 59px;
    height: 48px;
  }
`;

export const StyledQuotesIcon = styled(QuotesIcon)`
  width: 40px;
  height: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 59px;
    height: 48px;
  }
`;

export const StyledBlockquote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 240px;
  margin: 0;
  font-size: 18px;
  font-weight: 500;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
    min-height: 250px;
  }
`;

export const TestimonialText = styled.p`
  margin: 0;
  padding-top: 0;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    padding-top: 18px;
  }
`;

export const Author = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  margin: 0;
  font-weight: 800;
  padding-bottom: 0;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 20px;
    padding-bottom: 16px;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
`;
