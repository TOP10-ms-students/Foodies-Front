import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "~/common/layouts";
import { HomePage } from "~/pages";

import { ROUTE_PATHS } from "~/routing/constants";

export const RoutesList = () => (
  <Routes>
    <Route path={ROUTE_PATHS.home} element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path="*" element={<Navigate to={ROUTE_PATHS.home} />} />
  </Routes>
);
