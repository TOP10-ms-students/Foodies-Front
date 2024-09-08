import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "~/common/layouts";
import {
  HomePage,
  AddRecipePage,
  RecipePage,
  ProfilePage,
  MyProfilePage,
} from "~/pages";

import { ROUTE_PATHS } from "../constants";
import { PrivateRoute } from "./PrivateRoute";

const PRIVATE_ROUTES = [
  {
    path: ROUTE_PATHS.ADD_RECIPE,
    Component: AddRecipePage,
  },
  {
    path: ROUTE_PATHS.USER_PAGE,
    Component: ProfilePage,
  },
  {
    path: ROUTE_PATHS.MY_PROFILE,
    Component: MyProfilePage,
  },
];

export const RoutesList = () => (
  <Routes>
    <Route path={ROUTE_PATHS.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path={ROUTE_PATHS.RECIPE_PAGE} element={<RecipePage />} />

      {PRIVATE_ROUTES.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          }
        />
      ))}
    </Route>

    <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} />} />
  </Routes>
);
