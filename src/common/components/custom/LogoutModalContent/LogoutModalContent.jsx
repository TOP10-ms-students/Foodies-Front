import React from "react";

import { Button } from "~/common/components/ui/Button";

import {
  Box,
  Title,
  ButtonsBox,
  SeccondaryAction,
} from "./LogoutModalContent.styled";

export const LogoutModalContent = ({ isLoading, onLogout, onCancel }) => (
  <Box>
    <Title>Are you logging out?</Title>

    <SeccondaryAction>You can always log back in at my time.</SeccondaryAction>

    <ButtonsBox>
      <Button type="primary" block loading={isLoading} onClick={onLogout}>
        Log out
      </Button>

      <Button block type="secondary" loading={isLoading} onClick={onCancel}>
        Cancel
      </Button>
    </ButtonsBox>
  </Box>
);
