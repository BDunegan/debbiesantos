"use client";
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  font-family: ${({ theme }) => theme.font.base};

  ${({ $variant, theme }) => $variant === 'secondary' ? css`
    background: ${theme.colors.purpleLight};
    color: ${theme.colors.white};

    &:hover {
            background: ${theme.colors.purple};
          }
  ` : css`
    background: ${theme.colors.maroon};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.maroonDark};
          }
        `}
`;

/**
 * Reusable Button component supporting primary/secondary variants, accessibility, and tap size.
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ as, href, variant = 'primary', ...props }, ref) => {
  return (
    <StyledButton as={as} href={href} ref={ref} $variant={variant} {...props}>
      {props.children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button; 