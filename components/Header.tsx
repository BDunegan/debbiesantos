"use client";
/**
 * Header component with logo, navigation, and responsive mobile menu.
 * @returns {JSX.Element}
 */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/lib/theme";

export const HEADER_HEIGHT = "10vh";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: ${HEADER_HEIGHT};
  background: ${({ theme }) => theme.colors.maroon};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.lg};
  box-sizing: border-box;
  border-radius: 0 0 20px 20px;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100vw;
    border-radius: 0;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.subheading};
  transition: opacity 0.2s ease;
  gap: ${({ theme }) => theme.space.sm};

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size};
  }
`;

const LogoImage = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.white};
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: ${HEADER_HEIGHT};
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    width: 80vw;
    background: ${({ theme }) => theme.colors.maroon};
    padding: ${({ theme }) => theme.space.md};
    flex-direction: column;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 20px 20px;

    &.open {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
    padding: ${({ theme }) => theme.space.sm} 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > parseInt(theme.breakpoints.md)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo href="/">
        <LogoImage
          src="/logo.jpg"
          alt="Debbie Santos Logo"
          width={200}
          height={50}
          priority
        />
        Debbie Santos
        </Logo>
      <MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </MenuButton>
      <Nav ref={navRef} className={isMenuOpen ? "open" : ""} aria-label="Main navigation">
        <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
    </Nav>
    </HeaderContainer>
  );
} 