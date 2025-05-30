"use client";
import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  boxShadow?: string;
  style?: React.CSSProperties;
}

const StyledCard = styled.div<{ $boxShadow?: string }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ $boxShadow, theme }) => $boxShadow || theme.shadow.md};
  padding: ${({ theme }) => theme.space.md};
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  @media (min-width: 600px) {
    max-width: 480px;
    padding: ${({ theme }) => theme.space.lg};
  }
`;

/**
 * Card component for displaying content in a styled container.
 * @param {CardProps} props
 * @returns {JSX.Element}
 */
export const Card: React.FC<CardProps> = ({ children, className, boxShadow, style }): React.ReactElement => (
  <StyledCard className={className} $boxShadow={boxShadow} style={style}>{children}</StyledCard>
); 