"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import Link from "next/link";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.purpleLight}15, ${({ theme }) => theme.colors.purple}15);
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral700};
  max-width: 600px;
  margin: 0 auto;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.space.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.maroon};
    transform: translateY(-2px);
  }
`;

export default function CallToAction() {
  return (
    <Section>
      <ContentWrapper>
        <Title>Ready to Begin Your Journey?</Title>
        <Text>
          Take the first step towards positive change. I'm here to support you on your path to growth and well-being. Contact me today to schedule your initial consultation.
        </Text>
        <Button href="/contact">
          Schedule a Consultation
        </Button>
      </ContentWrapper>
    </Section>
  );
} 