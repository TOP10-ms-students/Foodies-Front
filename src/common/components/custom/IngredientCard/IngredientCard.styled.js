import { CloseOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { styled } from "styled-components";

export const IngredientCardBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 10px;
  width: fit-content;
  max-width: 175px;
  & > div {
    width: 70px;
  }
`;

export const IngredientImageCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
`;

export const IngredientImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export const IngredientName = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const IngredientWeight = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
