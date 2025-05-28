"use client";

/**
 * Footer component with contact info, quick links, and copyright.
 * @returns {JSX.Element}
 */
import React, { JSX as ReactJSX } from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.purple};
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
`;
const ContactInfo = styled.div`
  margin-bottom: 1rem;
`;
const FooterLinks = styled.div`
  margin-bottom: 1rem;
`;
const FooterLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
const Copyright = styled.div`
  font-size: 14px;
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