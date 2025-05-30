"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import ServicesList from "./ServicesList";
import TargetAudienceSection from "./TargetAudienceSection";
import FAQSection from "./FAQSection";
import CallToAction from "./CallToAction";
import HorizontalLine from "@/components/atomic/HorizontalLine";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} 0;
`;

export default function ServicesContent() {
  return (
    <Container>
      <ServicesList />
      <HorizontalLine />
      <TargetAudienceSection />
      <HorizontalLine />
      <FAQSection />
      <HorizontalLine />
      <CallToAction />
    </Container>
  );
} 