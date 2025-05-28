"use client";
/**
 * Header component with logo, navigation, and responsive mobile menu.
 * @returns {JSX.Element}
 */
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export const HEADER_HEIGHT = 72;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: ${HEADER_HEIGHT}px;
  padding: 0 0;
  background: ${({ theme }) => theme.colors.maroon};
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
`;
const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
`;
const Logo = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const NavLinks = styled.div<{ open?: boolean }>`
  display: flex;
  gap: 2rem;
  @media (max-width: 700px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.maroon};
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    z-index: 10;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
const MobileMenuButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Nav aria-label="Main navigation">
      <NavInner>
        <Logo href="/" aria-label="Debbie Santos Home">
          <span style={{ marginRight: 8 }}>🧠</span>Debbie Santos
        </Logo>
        <NavLinks open={menuOpen} aria-label="Main menu">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/policies">Policies</NavLink>
        </NavLinks>
        <MobileMenuButton
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </MobileMenuButton>
      </NavInner>
    </Nav>
  );
} 