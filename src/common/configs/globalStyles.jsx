import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: Mulish, sans-serif;
  }

  html { 
    box-sizing: border-box; 
  } 

  *, *:before, *:after {
    box-sizing: inherit; 
  }

  /* 
  * Overwrite antd styles
  */
  
  .ant-select-dropdown {
    border-radius: 15px !important;
  }

  .ant-select-item {
    border-radius: 12px !important;
  }

  .ant-select-item-option-selected {
    color: ${({ theme }) => theme.colors.white} !important;
  }

  .ant-dropdown-menu {
    background-color: ${({ theme }) => theme.colors.black} !important;
    border-radius: 15px !important;
    border: 1px solid ${({ theme }) => theme.colors.white} !important;
    
  }

  .ant-dropdown-menu-item {
    color: ${({ theme }) => theme.colors.white} !important;
    border-radius: 12px !important;
  }

  .ant-dropdown-menu-item-active {
    background-color: ${({ theme }) => theme.colors.gray} !important;
  }
`;
