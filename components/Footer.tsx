"use client";

/**
 * Footer component with contact info, quick links, and copyright.
 * @returns {JSX.Element}
 */
import React, { JSX as ReactJSX } from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.maroon};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;
const ContactInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.sm};
`;
const FooterLinks = styled.div`
  margin-bottom: ${({ theme }) => theme.space.sm};
`;
const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 ${({ theme }) => theme.space.xs};
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
const Copyright = styled.div`
  font-size: ${({ theme }) => theme.font.small};
`;

const Footer: React.FC = (): React.ReactElement => (
  <FooterWrapper>
    <ContactInfo>
      <strong>Contact:</strong> <a href="mailto:info@debbiesantos.com" style={{ color: '#fff', textDecoration: 'underline' }}>info@debbiesantos.com</a> | (555) 123-4567
    </ContactInfo>
    <FooterLinks>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/services">Services</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/policies">Policies</FooterLink>
    </FooterLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} Debbie Santos. All rights reserved.
    </Copyright>
  </FooterWrapper>
);

export default Footer; 