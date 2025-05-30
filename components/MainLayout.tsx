"use client";
import React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "./Header";

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
  font-family: ${({ theme }) => theme.font.base};
`;

const Content = styled.main`
  flex: 1 0 auto;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${HEADER_HEIGHT};
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.maroon};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
`;

/**
 * MainLayout component with ARIA landmarks and semantic structure.
 * @param {MainLayoutProps} props
 * @returns {JSX.Element}
 */
const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }): React.ReactElement => {
  return (
    <LayoutWrapper>
      <HeaderWrapper role="banner">{header}</HeaderWrapper>
      <Content id="main-content" role="main" tabIndex={-1}>
        {children}
      </Content>
      <FooterWrapper role="contentinfo">{footer}</FooterWrapper>
    </LayoutWrapper>
  );
};

export default MainLayout; 