"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.space.md} 0;
`;

const Line = styled.div`
  width: 80vw;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.purpleLight}, transparent);
  border-radius: ${({ theme }) => theme.radius.lg};
  opacity: 0.8;
`;

interface HorizontalLineProps {
  className?: string;
}

export default function HorizontalLine({ className }: HorizontalLineProps) {
  return (
    <LineContainer className={className}>
      <Line />
    </LineContainer>
  );
} 