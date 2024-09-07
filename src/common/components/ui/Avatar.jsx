import { UserOutlined } from "@ant-design/icons";
import { Avatar as AntdAvatar } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledAvatar = styled(AntdAvatar)``;

export const Avatar = ({ ...props }) => (
  <StyledAvatar icon={<UserOutlined />} {...props} />
);
