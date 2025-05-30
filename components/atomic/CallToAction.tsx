"use client";
import React from "react";
import styled from "styled-components";
import Button from "@/components/atomic/Button";
import { Card } from "@/components/atomic/Card";
import { theme } from "@/lib/theme";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

const Section = styled.section`
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.heading};
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.maroon};
`;
const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-size: ${({ theme }) => theme.font.subheading};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral700};
`;

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonHref, className }) => (
  <Section className={className}>
    <Card boxShadow={theme.shadow.md}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Button as="a" href={buttonHref}>{buttonText}</Button>
    </Card>
  </Section>
);

export default CallToAction; 