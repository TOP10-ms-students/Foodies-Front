import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import { ROUTE_PATHS } from "~/routing/constants";
import { Box } from "./PathInfo.styled";

export const PathInfo = ({ title }) => {
  const BREADCRUMB_ITEMS = [
    { title: <Link to={ROUTE_PATHS.HOME}>Home</Link> },
    { title },
  ];

  return (
    <Box>
      <Breadcrumb items={BREADCRUMB_ITEMS} />
    </Box>
  );
};
