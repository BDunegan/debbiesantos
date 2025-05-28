"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atomic/Button";
import { Card } from "@/components/atomic/Card";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

const Section = styled.section`
  padding: 2rem 1rem 3rem 1rem;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.purple};
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonHref, className }) => (
  <Section className={className}>
    <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Button as="a" href={buttonHref}>{buttonText}</Button>
    </Card>
  </Section>
);

export default CallToAction; 