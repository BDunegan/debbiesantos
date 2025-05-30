"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
  className?: string;
}

const typeStyles = {
  success: css`
    background: #e6f7e9;
    color: #1e4620;
    border-left: 6px solid #4caf50;
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
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  margin: ${({ theme }) => theme.space.sm} 0;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  position: relative;
  opacity: 1;
  animation: fadeIn 0.3s ease;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: none; }
  }
  ${({ type }) => typeStyles[type]}
`;

/**
 * Alert/Toast component for feedback messages with ARIA live region.
 * @param {AlertProps} props
 * @returns {JSX.Element}
 */
export const Alert: React.FC<AlertProps> = ({ type = "info", children, className }) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
  <StyledAlert
    type={type}
    className={className}
    role="alert"
    aria-live={type === "error" ? "assertive" : "polite"}
  >
    {children}
      <button onClick={() => setVisible(false)} aria-label="Dismiss" style={{
        position: 'absolute', top: 8, right: 12, background: 'none', border: 'none', color: 'inherit', fontSize: '1.2em', cursor: 'pointer', opacity: 0.7
      }}>&times;</button>
  </StyledAlert>
); 
}; 