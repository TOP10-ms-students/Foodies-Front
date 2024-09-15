import { Breadcrumb } from "antd";
import React from "react";

import { ROUTE_PATHS } from "~/routing/constants";

import { Box, HomeLink } from "./PathInfo.styled";

export const PathInfo = ({ title }) => {
  const BREADCRUMB_ITEMS = [
    { title: <HomeLink to={ROUTE_PATHS.HOME}>Home</HomeLink> },
    { title },
  ];

  return (
    <Box>
      <Breadcrumb items={BREADCRUMB_ITEMS} />
    </Box>
  );
};
