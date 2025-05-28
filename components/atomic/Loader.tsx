"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid ${({ theme }) => theme.colors.purpleLight};
  border-top: 4px solid ${({ theme }) => theme.colors.maroon};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

/**
 * Loader/Spinner component for indicating loading state, accessible with ARIA.
 * @param {{ label?: string }} props
 * @returns {JSX.Element}
 */
export const Loader: React.FC<{ label?: string }> = ({ label = "Loading..." }): React.ReactElement => (
  <span role="status" aria-live="polite" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <Spinner aria-hidden="true" />
    <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>{label}</span>
  </span>
); 