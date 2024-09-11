import React from "react";
import { styled } from "styled-components";

export const HeroSection = styled.section`
  width: 359px;
  height: 796px;
  flex-shrink: 0;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  @media ${({ theme }) => theme.media.tablet} {
    width: 736px;
    height: 992px;
    border-radius: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 1400px;
    height: 970px;
    border-radius: 30px;
  }
`;

export const HeroContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${({ theme }) => theme.media.tablet},
    ${({ theme }) => theme.media.desktop} {
    column-gap: 40px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  padding-top: 194px;
  width: 327px;
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.tablet} {
    width: 678px;
    padding-top: 217px;
    font-size: 70px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 875px;
    padding-top: 154px;
    font-size: 90px;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  width: 326px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet},
    ${({ theme }) => theme.media.desktop} {
    width: 577px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const HeroImagesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0;
`;

const StyledHeroImage = styled.div`
  width: ${({ size }) => (size === "small" ? "77px" : "190px")};
  height: ${({ size }) => (size === "small" ? "70px" : "172px")};
  border-radius: ${({ size }) => (size === "small" ? "15px" : "30px")};
  flex-shrink: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.media.tablet},
    ${({ theme }) => theme.media.desktop} {
    width: ${({ size }) => (size === "small" ? "128px" : "302px")};
    height: ${({ size }) => (size === "small" ? "116px" : "273px")};
  }
`;

export const HeroImage = ({ size, imageUrl }) => {
  return (
    <StyledHeroImage
      size={size}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};
