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
  variant?: 'primary' | 'secondary';
}

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.maroon}08, ${({ theme }) => theme.colors.maroon}12);
  padding: ${({ theme }) => theme.space.xl};
  max-width: 800px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.maroon}15;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.maroon};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space.lg};
  max-width: 600px;
`;

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  className,
  variant = 'primary'
}) => (
  <Section className={className}>
    <StyledCard>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Button as="a" href={buttonHref} variant={variant}>{buttonText}</Button>
    </StyledCard>
  </Section>
);

export default CallToAction; 