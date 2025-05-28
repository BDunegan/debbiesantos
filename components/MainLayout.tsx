import React from "react";
import { HEADER_HEIGHT } from "./Header";

interface MainLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

/**
 * MainLayout component with ARIA landmarks, skip-to-content, and semantic structure.
 * @param {MainLayoutProps} props
 * @returns {JSX.Element}
 */
const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }): React.ReactElement => {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <header role="banner">{header}</header>
      <main id="main-content" role="main" tabIndex={-1} style={{ outline: "none", paddingTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <footer role="contentinfo">{footer}</footer>
    </>
  );
};

export default MainLayout; 