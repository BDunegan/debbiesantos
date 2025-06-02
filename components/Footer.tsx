"use client";

/**
 * Footer component with contact info, quick links, and copyright.
 * @returns {JSX.Element}
 */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.maroon};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    align-items: flex-start;
    justify-items: center;
    border-top: 2px solid ${({ theme }) => theme.colors.accent};
    padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.xl};
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  min-width: 280px;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: 0 ${({ theme }) => theme.space.xl};
    min-height: 180px;
    &:last-child {
      border-right: none;
    }
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1.5px solid ${({ theme }) => theme.colors.accent};
  margin: ${({ theme }) => theme.space.lg} 0;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.sm};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.accent};
`;

const ContactInfo = styled.address`
  font-style: normal;
  line-height: 1.8;
  font-size: 0.98em;

  strong {
    font-size: 1.05em;
    display: block;
    margin-bottom: ${({ theme }) => theme.space.xs};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

const NavLinkItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1em;
    padding: 0.25em 0;
    &:hover, &:focus {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  align-items: center;
`;

const PaymentImage = styled(Image)`
  max-width: 100%;
  align-items: center;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.white}22;
  padding: ${({ theme }) => theme.space.xs};
`;

const PaymentNote = styled.p`
  font-size: 0.95em;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.textLight};
  padding-top: ${({ theme }) => theme.space.lg};
  margin-top: 0;
  letter-spacing: 0.01em;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterColumn>
      <SectionTitle>Contact Information</SectionTitle>
      <ContactInfo>
        <strong>Debra (Debbie) Santos, MS, LPC</strong>
        BART Counseling, LLC<br />
        16864 Royal Crest Drive<br />
        Houston, TX 77058<br />
        Dickinson, TX<br />
        <a href="tel:2818038155">281-803-8155</a><br />
        <a href="https://www.bartcounseling.com/" target="_blank" rel="noopener noreferrer">
          bartcounseling.com
        </a>
      </ContactInfo>
    </FooterColumn>

    <FooterColumn>
      <SectionTitle>Quick Links</SectionTitle>
      <NavLinks>
        <NavLinkItem><Link href="/">Home</Link></NavLinkItem>
        <NavLinkItem><Link href="/about">About</Link></NavLinkItem>
        <NavLinkItem><Link href="/services">Services</Link></NavLinkItem>
        <NavLinkItem><Link href="/contact">Contact</Link></NavLinkItem>
      </NavLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Debbie Santos. All rights reserved.
      </Copyright>
    </FooterColumn>

    <FooterColumn>
      <SectionTitle>Payment Information</SectionTitle>
      <PaymentSection>
        <PaymentImage src="/cards.jpg" alt="Accepted payment cards" width={300} height={100} />
        <PaymentNote>
          I take most insurances and some Medicaid plans.<br />
          For self-pay, I take most credit cards.
        </PaymentNote>
      </PaymentSection>
    </FooterColumn>
  </FooterWrapper>
);

export default Footer; 