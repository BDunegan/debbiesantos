"use client";
import React from "react";
import styled from "styled-components";
import PageContainer from "@/components/PageContainer";
import BioSection from "@/components/about/BioSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import QualificationsList from "@/components/about/QualificationsList";
import CallToAction from "@/components/about/CallToAction";
import HorizontalLine from "@/components/atomic/HorizontalLine";

const AboutPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

export default function AboutContent() {
  return (
    <PageContainer>
      <AboutPage>
        <BioSection />
        <PhilosophySection />
        <QualificationsList />
        <CallToAction />
      </AboutPage>
    </PageContainer>
  );
} 