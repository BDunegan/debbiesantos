import { createGlobalStyle } from "styled-components";
import type { DefaultTheme } from "styled-components";

// Extend DefaultTheme to include custom theme properties
declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof import("./theme").theme.colors;
    font: typeof import("./theme").theme.font;
    space: typeof import("./theme").theme.space;
    radius: typeof import("./theme").theme.radius;
    shadow: typeof import("./theme").theme.shadow;
  }
}

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.neutral900};
  }
  body {
    font-family: ${({ theme }) => theme.font.base};
    background: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.neutral900};
    min-height: 100vh;
    line-height: 1.5;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button, input, textarea, select {
    font: inherit;
  }
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.purple};
    outline-offset: 2px;
  }
  .skip-to-content {
    position: absolute;
    left: -999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: 1000;
    background: ${({ theme }) => theme.colors.purple};
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 8px 8px;
    font-weight: bold;
    transition: left 0.2s;
  }
  .skip-to-content:focus {
    left: 0;
    width: auto;
    height: auto;
    outline: 2px solid ${({ theme }) => theme.colors.maroon};
  }
`;

export default GlobalStyle; 