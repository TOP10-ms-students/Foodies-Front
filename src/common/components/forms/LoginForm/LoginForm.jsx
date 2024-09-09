import { Form, notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AuthFormLayout } from "~/common/components/custom/AuthFormLayout";
import { Input, PasswordInput } from "~/common/components/ui/Input";

import { authTokenService } from "~/api/ApiService";
import { login } from "~/api/user";

import { setUser } from "~/store/slices/auth";

const FORM_ITEM_RULES = {
  email: [{ required: true, message: "Please input your email!" }],
  password: [{ required: true, message: "Please input your password!" }],
};

export const LoginForm = ({ onLinkClick, onSuccess }) => {
  const [form] = Form.useForm();

  const [notificationApi, notificationContext] = notification.useNotification();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    setIsLoading(true);

    return login(values)
      .then(({ data }) => {
        dispatch(setUser(data.user));
        authTokenService.set(data.token);
        notificationApi.success({ message: "Login successfull!" });
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
      title="Sign in"
      submitText="Sign in"
      seccondaryActionText="Don't have an account?"
      seccondaryActionLinkText="Create an account"
      form={form}
      onSubmit={onSubmit}
      onLinkClick={onLinkClick}
      isLoading={isLoading}
      // eslint-disable-next-line prettier/prettier
    >
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
