"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import ContactForm from "./ContactForm";
import Map from "./Map";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('/daisys.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.85)
    );
    z-index: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} 0;
  position: relative;
  z-index: 2;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

const InfoCard = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.purpleLight}15, ${({ theme }) => theme.colors.purple}15);
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: transform 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-weight: 600;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral700};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.neutral700};
`;

const contactInfo = {
  location: {
    title: "Office Location",
    text: "123 Therapy Street, Suite 456\nAnytown, ST 12345",
  },
  hours: {
    title: "Office Hours",
    text: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By appointment only\nSunday: Closed",
  },
  contact: {
    title: "Contact Information",
    items: [
      { label: "Phone", value: "(555) 123-4567" },
      { label: "Email", value: "contact@example.com" },
    ],
  },
};

export default function ContactContent() {
  return (
    <BackgroundWrapper>
      <Container>
        <Section>
          <Title>Get in Touch</Title>
          <ContentWrapper>
            <InfoSection>
              <InfoCard>
                <InfoTitle>{contactInfo.location.title}</InfoTitle>
                <InfoText>{contactInfo.location.text}</InfoText>
                <Map />
              </InfoCard>
              <InfoCard>
                <InfoTitle>{contactInfo.hours.title}</InfoTitle>
                <InfoText>{contactInfo.hours.text}</InfoText>
              </InfoCard>
              <InfoCard>
                <InfoTitle>{contactInfo.contact.title}</InfoTitle>
                <ContactInfo>
                  {contactInfo.contact.items.map((item) => (
                    <ContactItem key={item.label}>
                      <strong>{item.label}:</strong> {item.value}
                    </ContactItem>
                  ))}
                </ContactInfo>
              </InfoCard>
            </InfoSection>
            <ContactForm />
          </ContentWrapper>
        </Section>
      </Container>
    </BackgroundWrapper>
  );
} 