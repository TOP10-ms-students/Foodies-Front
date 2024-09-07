import { ConfigProvider } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { RoutesList } from "~/routing/components";

import { styledComponentTheme, antdTheme } from "~/common/configs/themes";

import { GlobalStyle } from "~/common/configs/globalStyles";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={styledComponentTheme}>
      <ConfigProvider theme={antdTheme}>
        <GlobalStyle />
        <RoutesList />
      </ConfigProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
