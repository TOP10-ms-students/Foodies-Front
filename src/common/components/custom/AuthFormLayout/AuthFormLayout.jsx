import { Form } from "antd";
import React from "react";

import { Button } from "~/common/components/ui/Button";

import {
  Box,
  Title,
  InputsBox,
  SecondaryAction,
  Link,
} from "./AuthFormLayout.styled";

export const AuthFormLayout = ({
  title,
  children,
  form,
  onSubmit,
  submitText,
  seccondaryActionText,
  seccondaryActionLinkText,
  onLinkClick,
  isLoading,
}) => (
  <Box>
    <Title>{title}</Title>

    <Form form={form} onFinish={onSubmit} disabled={isLoading}>
      <InputsBox>{children}</InputsBox>

      <Button htmlType="submit" block loading={isLoading}>
        {submitText}
      </Button>
    </Form>

    <SecondaryAction>
      {seccondaryActionText}{" "}
      <Link onClick={onLinkClick}>{seccondaryActionLinkText}</Link>
    </SecondaryAction>
  </Box>
);
