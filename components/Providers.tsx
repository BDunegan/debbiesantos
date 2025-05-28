"use client";
import React from "react";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/theme";
import GlobalStyle from "@/lib/GlobalStyle";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers component to wrap the app with styled-components ThemeProvider and GlobalStyle.
 * @param {ProvidersProps} props
 * @returns {React.ReactElement}
 */
const Providers: React.FC<ProvidersProps> = ({ children }): React.ReactElement => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default Providers; 