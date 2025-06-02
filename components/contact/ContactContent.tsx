"use client";
import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import { theme } from "../../lib/theme";
import HorizontalLine from "../atomic/HorizontalLine";
import { HEADER_HEIGHT } from "../Header";

const BackgroundWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url('/daisys.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -${HEADER_HEIGHT};
  padding-top: ${HEADER_HEIGHT};
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.7)
    );
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl};
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.heading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  margin-top: ${({ theme }) => theme.space.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  backdrop-filter: blur(10px);
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.neutral700};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const Disclaimer = styled.div`
  margin-top: 2.5rem;
  background: ${({ theme }) => theme.colors.background || '#f9f9f9'};
  padding: 1.25rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 0.97em;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactContent: React.FC = () => {
  return (
    <BackgroundWrapper>
      <Container>
        <Title>Contact Me</Title>
        <HorizontalLine />
        <ContentWrapper>
          <InfoCard>
            <InfoTitle>Get in Touch</InfoTitle>
            <InfoText>
              I'm here to help you on your journey to better mental health and well-being.
              Whether you have questions about my services or want to schedule a consultation,
              I'm ready to listen and support you.
            </InfoText>
            <InfoText>
              Please fill out the contact form, and I'll get back to you as soon as possible.
              Your privacy and comfort are my top priorities.
            </InfoText>
            <Disclaimer>
              <strong style={{ color: theme.colors.maroon, fontWeight: 700 }}>NOTICE OF CONFIDENTIALITY:</strong> This electronic mail transmission (including attachments) may contain privileged and CONFIDENTIAL INFORMATION belonging to the sender. Electronic mail may include patient information protected by federal and state privacy laws. The information is intended only for the use of the individual or entity listed above. If you are not the intended recipient, you are notified that any review, disclosure, duplication, distribution, use, or taking of any action relying on the contents of this electronically-mailed confidential information is strictly prohibited. If you have received this electronic mail in error, please contact us by telephone or reply by email immediately to arrange for the return and correction of internal records. In addition, please destroy all copies of the original message.
            </Disclaimer>
          </InfoCard>
          <ContactForm />
        </ContentWrapper>
      </Container>
    </BackgroundWrapper>
  );
};

export default ContactContent;