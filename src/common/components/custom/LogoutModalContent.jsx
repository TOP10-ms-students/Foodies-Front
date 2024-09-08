import { Typography } from "antd";
import React from "react";
import { styled } from "styled-components";

import { Button } from "../ui/Button";

const Box = styled.div`
  padding: 40px 6px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 60px 56px;
  }
`;

const Title = styled.p`
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

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 20px;
  }
`;

const SeccondaryAction = styled(Typography)`
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

export const LogoutModalContent = ({ isLoading, onLogout, onCancel }) => (
  <Box>
    <Title>Are you logging out?</Title>

    <SeccondaryAction>You can always log back in at my time.</SeccondaryAction>

    <ButtonsBox>
      <Button block loading={isLoading} onClick={onLogout}>
        Log out
      </Button>

      <Button block type="secondary" loading={isLoading} onClick={onCancel}>
        Cancel
      </Button>
    </ButtonsBox>
  </Box>
);
