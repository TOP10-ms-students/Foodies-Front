import { Checkbox as AntdCheckbox } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledCheckbox = styled(AntdCheckbox)``;

export const Checkbox = ({ ...props }) => <StyledCheckbox {...props} />;
