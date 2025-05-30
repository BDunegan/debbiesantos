"use client";
import React from "react";
import { HEADER_HEIGHT } from "./Header";
import styled from "styled-components";

interface MainLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral100};
`;

const Content = styled.main`
  flex: 1 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

/**
 * MainLayout component with ARIA landmarks, skip-to-content, and semantic structure.
 * @param {MainLayoutProps} props
 * @returns {JSX.Element}
 */
const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }): React.ReactElement => {
  return (
    <LayoutWrapper>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <header role="banner" style={{ position: 'sticky', top: 0, zIndex: 100 }}>{header}</header>
      <Content id="main-content" role="main" tabIndex={-1}>
        {children}
      </Content>
      <footer role="contentinfo">{footer}</footer>
    </LayoutWrapper>
  );
};

export default MainLayout; 