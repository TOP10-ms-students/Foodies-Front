import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { getCurrentUser } from "~/store/selectors";
import { Avatar } from "../../ui/Avatar";
import { LoginForm } from "~/common/components/forms/LoginForm";
import { useAuthModals } from "~/common/hooks/useAuthModals";
import {
  LabelsBox,
  RecipeLabel,
  RecipeText,
  Title,
  UserBtn,
  UserInfo,
  UserName,
} from "./RecipeMainInfo.styled";
import { useNavigate } from "react-router-dom";

export const RecipeMainInfo = ({
  title,
  categoryName,
  time,
  description,
  ownerAvatar,
  ownerName,
}) => {
  const { id } = useSelector(getCurrentUser);

  const { isOpenLogin, handleOpenLogin, switchModals, handleCancel } =
    useAuthModals();

  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate(`/users/${id}`);
  };

  return (
    <>
      <Title>{title}</Title>

      <LabelsBox>
        <RecipeLabel>{categoryName}</RecipeLabel>
        <RecipeLabel>{time} min</RecipeLabel>
      </LabelsBox>

      <RecipeText>{description}</RecipeText>

      <UserBtn onClick={id ? goToUserPage : handleOpenLogin}>
        <Avatar src={ownerAvatar} />

        <UserInfo>
          Created by:
          <UserName>{ownerName}</UserName>
        </UserInfo>
      </UserBtn>

      <Modal open={isOpenLogin} onCancel={handleCancel} centered footer={null}>
        <LoginForm onLinkClick={switchModals} onSuccess={handleCancel} />
      </Modal>
    </>
  );
};
