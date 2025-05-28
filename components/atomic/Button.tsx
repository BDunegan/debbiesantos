"use client";
import React from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
}

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  min-width: 44px;
  min-height: 44px;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  ${({ variant, theme }) =>
    variant === "primary"
      ? css`
          background: ${theme.colors.maroon};
          color: #fff;
          &:hover,
          &:focus-visible {
            background: ${theme.colors.purple};
          }
        `
      : css`
          background: #fff;
          color: ${theme.colors.maroon};
          border: 2px solid ${theme.colors.maroon};
          &:hover,
          &:focus-visible {
            background: ${theme.colors.purpleLight};
            color: ${theme.colors.maroon};
          }
        `}
  &:focus-visible {
    box-shadow: 0 0 0 3px ${props => props.theme.colors.purple};
  }
`;

/**
 * Reusable Button component supporting primary/secondary variants, accessibility, and tap size.
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
export const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, as, href, ...props }, ref): React.ReactElement => (
    <StyledButton as={as} href={href} ref={ref} variant={variant} {...props}>
      {children}
    </StyledButton>
  )
);
Button.displayName = "Button"; 