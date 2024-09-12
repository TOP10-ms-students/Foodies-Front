import Icon, {
  EyeOutlined,
  EyeInvisibleOutlined,
  HeartOutlined,
  ArrowUpOutlined,
  InstagramFilled,
  YoutubeFilled,
  DownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React from "react";
import { styled } from "styled-components";

import { CameraIconSvg } from "./CameraIconSvg";
import { FacebookIconSvg } from "./FacebookIconSvg";

// COMMON ICONS
export const EyeIcon = EyeOutlined;
export const EyeInvisibleIcon = EyeInvisibleOutlined;
export const HeartIcon = HeartOutlined;
export const ArrowUpIcon = styled(ArrowUpOutlined)`
  transform: rotate(45deg);
`;
export const ArrowLeftIcon = styled(ArrowUpOutlined)`
  transform: rotate(-90deg);
`;
export const DownIcon = DownOutlined;
export const UpIcon = styled(DownOutlined)`
  transform: rotate(180deg);
`;
export const CameraIcon = () => <Icon component={CameraIconSvg} />;
export const DeleteIcon = DeleteOutlined;

// SOCIAL ICONS
export const FacebookIcon = () => <Icon component={FacebookIconSvg} />;
export const InstagramIcon = InstagramFilled;
export const YoutubeIcon = YoutubeFilled;
