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
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.lg};
    min-height: 50vh;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};
  box-sizing: border-box;
`;

const PrayerCard = styled(Card)`
  background: linear-gradient(
    rgba(255, 255, 255, 0.85),
    rgba(255, 255, 255, 0.7)
  );
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(12px);
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 95vw;
    padding: ${({ theme }) => theme.space.md};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xl};
  margin-bottom: ${({ theme }) => `calc(${theme.space.md} * 2)`};
  color: ${({ theme }) => theme.colors.maroon};
`;

const PrayerText = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: 2;
  white-space: pre-line;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export default function AboutPreview() {
  return (
    <Section>
      <CardWithBg>
        <ContentWrapper>
          <PrayerCard>
            <Title>Serenity Prayer</Title>
            <PrayerText>
              God,
              grant me the serenity to accept the things I cannot change,
              the courage to change the things I can,
              and the wisdom to know the difference.
            </PrayerText>
          </PrayerCard>
        </ContentWrapper>
      </CardWithBg>
    </Section>
  );
} 