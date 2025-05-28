"use client";
import React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "./Header";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral100 || "#faf9f6"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0 2rem 0;
  box-sizing: border-box;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => (
  <Container className={className}>
    <Inner>{children}</Inner>
  </Container>
);

export default PageContainer; 