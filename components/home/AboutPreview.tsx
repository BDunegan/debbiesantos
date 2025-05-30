"use client";

/**
 * AboutPreview section for the Home page, with a sample image, bio, and CTA button.
 * @returns {JSX.Element}
 */
import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";
import { theme } from "@/lib/theme";

const Section = styled.section`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
`;

const CardWithBg = styled.div`
  background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.55)), url('/lily.jpg') center/cover no-repeat;
  padding: ${({ theme }) => `calc(${theme.space.xl} * 2)`};
  color: white;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  margin-bottom: ${({ theme }) => `calc(${theme.space.md} * 2)`};
  color: white;
`;

const PrayerText = styled.p`
  font-size: ${({ theme }) => `calc(${theme.font.size} * 1.2)`};
  line-height: 2;
  white-space: pre-line;
  margin: 0;
`;

export default function AboutPreview() {
  return (
    <Section>
      <CardWithBg>
        <ContentWrapper>
          <Title>Serenity Prayer</Title>
          <PrayerText>
            God, grant me the serenity to accept the things I cannot change,
            the courage to change the things I can,
            and the wisdom to know the difference.
          </PrayerText>
        </ContentWrapper>
      </CardWithBg>
    </Section>
  );
} 