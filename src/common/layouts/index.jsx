import { Spin } from "antd";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LayoutFooter } from "./LayoutFooter";
import { LayoutHeader } from "./LayoutHeader";
import { MainLayout } from "./MainLayout";

export const Layout = () => (
  <>
    <LayoutHeader />
    <MainLayout>
      <Suspense fallback={<Spin />}>
        <Outlet />
      </Suspense>
    </MainLayout>
    <LayoutFooter />
  </>
);
