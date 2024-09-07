import Icon, {
  EyeOutlined,
  EyeInvisibleOutlined,
  HeartOutlined,
  ArrowUpOutlined,
  InstagramFilled,
  YoutubeFilled,
  DownOutlined,
} from "@ant-design/icons";
import React from "react";
import { styled } from "styled-components";

import { FacebookIconSvg } from "./FacebookIconSvg";

// COMMON ICONS
export const EyeIcon = EyeOutlined;
export const EyeInvisibleIcon = EyeInvisibleOutlined;
export const HeartIcon = HeartOutlined;
export const ArrowUpIcon = styled(ArrowUpOutlined)`
  transform: rotate(45deg);
`;
export const DownIcon = DownOutlined;

// SOCIAL ICONS
export const FacebookIcon = () => <Icon component={FacebookIconSvg} />;
export const InstagramIcon = InstagramFilled;
export const YoutubeIcon = YoutubeFilled;
