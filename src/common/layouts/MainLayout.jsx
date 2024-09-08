import React from "react";
import { styled } from "styled-components";

import { PageContainer } from "./PageContainer";

const StyledMainLayout = styled.main``;

export const MainLayout = ({ children }) => (
  <PageContainer>
    <StyledMainLayout>{children}</StyledMainLayout>
  </PageContainer>
);
