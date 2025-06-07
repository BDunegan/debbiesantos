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
  background: linear-gradient(
    ${({ theme }) => theme.colors.maroonDark} 0%,
    ${({ theme }) => theme.colors.maroon} 100%,
    ${({ theme }) => theme.colors.maroonDark} 100%
  );
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
  font-size: ${({ theme }) => theme.font.size['2xl']};
  transition: all 0.3s ease;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => `${theme.colors.maroonDark}40`};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

const LogoImage = styled(Image)`
  object-fit: cover;
  transition: all 0.3s ease;
  height: 100%;
  border-radius: 20%;
  overflow: hidden;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    background: ${({ theme }) => theme.colors.maroon};
    padding: ${({ theme }) => theme.space.lg} 0;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space.lg};
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: none;
    border-radius: 0;

    &.open {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.sm};
  position: relative;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.white}15`};
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.font.size.md};
    padding: ${({ theme }) => theme.space.md};
    width: 100%;
    text-align: center;

    &:hover {
      transform: none;
      background: ${({ theme }) => `${theme.colors.white}10`};
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xl};
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
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
          width={250}
          height={75}
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