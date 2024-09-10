import { Form, notification } from "antd";
import React, { useState } from "react";

import { AuthFormLayout } from "~/common/components/custom/AuthFormLayout";
import { Input, PasswordInput } from "~/common/components/ui/Input";

import { signUp } from "~/api/user";

const FORM_ITEM_RULES = {
  name: [{ required: true, message: "Please input your name!" }],
  email: [{ required: true, message: "Please input your email!" }],
  password: [{ required: true, message: "Please input your password!" }],
};

export const SignUpForm = ({ onLinkClick, onSuccess }) => {
  const [form] = Form.useForm();
  const [notificationApi, notificationContext] = notification.useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    setIsLoading(true);

    return signUp(values)
      .then(() => {
        notificationApi.success({ message: "Registration successfull!" });
        form.resetFields();
        onSuccess();
      })
      .catch(({ response: { data } }) => {
        const message = data?.message ?? "Something went wrong";
        notificationApi.error({ message });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthFormLayout
      title="Sign up"
      submitText="Create"
      seccondaryActionText="I already have an account?"
      seccondaryActionLinkText="Sign in"
      form={form}
      onSubmit={onSubmit}
      onLinkClick={onLinkClick}
      isLoading={isLoading}
      // eslint-disable-next-line prettier/prettier
    >
      <Form.Item name="name" rules={FORM_ITEM_RULES.name}>
        <Input placeholder="Name*" width="100%" />
      </Form.Item>

      <Form.Item name="email" rules={FORM_ITEM_RULES.email}>
        <Input placeholder="Email*" width="100%" />
      </Form.Item>

      <Form.Item name="password" rules={FORM_ITEM_RULES.password}>
        <PasswordInput placeholder="Password*" width="100%" />
      </Form.Item>

      {notificationContext}
    </AuthFormLayout>
  );
};