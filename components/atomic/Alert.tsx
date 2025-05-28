"use client";
import React from "react";
import styled, { css } from "styled-components";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
  className?: string;
}

const typeStyles = {
  success: css`
    background: ${({ theme }) => theme.colors.neutral200};
    color: ${({ theme }) => theme.colors.maroon};
    border-left: 6px solid #2ecc40;
  `,
  error: css`
    background: #fff0f0;
    color: #b00020;
    border-left: 6px solid #b00020;
  `,
  info: css`
    background: ${({ theme }) => theme.colors.purpleLight};
    color: ${({ theme }) => theme.colors.purple};
    border-left: 6px solid ${({ theme }) => theme.colors.purple};
  `,
  warning: css`
    background: #fffbe6;
    color: #ad8b00;
    border-left: 6px solid #ad8b00;
  `,
};

const StyledAlert = styled.div<{ type: AlertType }>`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  ${({ type }) => typeStyles[type]}
`;

/**
 * Alert/Toast component for feedback messages with ARIA live region.
 * @param {AlertProps} props
 * @returns {JSX.Element}
 */
export const Alert: React.FC<AlertProps> = ({ type = "info", children, className }): React.ReactElement => (
  <StyledAlert
    type={type}
    className={className}
    role="alert"
    aria-live={type === "error" ? "assertive" : "polite"}
  >
    {children}
  </StyledAlert>
); 