import React from "react";
import { styled } from "styled-components";

import { Input } from "~/common/components";

export const PageBox = styled.div`
  padding: 126px 0 64px;
`;

export const FormBox = styled.div`
  padding-top: 18px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 24px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: grid;
    grid-template-columns: 550px auto;
    column-gap: 80px;
  }
`;

export const NameInpuBox = styled.div`
  padding-top: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 80px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 0;
  }
`;

export const NameInput = styled((props) => (
  <Input {...props} variant="borderless" />
))`
  border: none;

  font-size: 24px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;

export const DescriptionInpuBox = styled.div`
  padding-top: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 40px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  padding-bottom: 8px;

  @media ${({ theme }) => theme.media.desktop} {
    padding-bottom: 16px;
  }
`;

export const InputsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
    column-gap: 20px;
  }
`;

export const CategoryBox = styled.div`
  padding-top: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 60px;
  }
`;

export const IngredientsInputsBox = styled.div`
  padding-top: 20px;
  padding-bottom: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

export const QuantityInputBox = styled.div`
  display: flex;
  align-items: end;
`;

export const IngredientsBox = styled.div`
  padding: 32px 0 64px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 40px 0 80px;
  }
`;

export const IngredientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 20px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 80px;
  }
`;
