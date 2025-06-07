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
    border-top: 2px solid ${({ theme }) => theme.colors.purpleAccent};
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

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.sm};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.purpleAccent};
  }
`;

const ContactInfo = styled.address`
  font-style: normal;
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.font.size.sm};

  strong {
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    display: block;
    margin-bottom: ${({ theme }) => theme.space.xs};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.purpleAccent};
      text-decoration-color: ${({ theme }) => theme.colors.purpleAccent};
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
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    padding: 0.25em 0;
    &:hover, &:focus {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.purpleAccent};
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
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme }) => theme.colors.neutral300};
  margin: 0;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.neutral300};
  padding-top: ${({ theme }) => theme.space.lg};
  margin-top: 0;
  letter-spacing: 0.01em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 0.25em 0;
  &:hover, &:focus {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.purpleAccent};
  }
`;

const SocialIcon = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
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
      <SocialLinks>
        <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/facebook.png" alt="Facebook" width={24} height={24} />
        </SocialLink>
        <SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/twitter.png" alt="X / Twitter" width={24} height={24} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/instagram.png" alt="Instagram" width={24} height={24} />
        </SocialLink>
      </SocialLinks>
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