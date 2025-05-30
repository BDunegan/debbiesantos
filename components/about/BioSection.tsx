"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { HEADER_HEIGHT } from "../Header";
import HorizontalLine from "../atomic/HorizontalLine";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  min-height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  padding: 0 ${({ theme }) => theme.space.md};
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.heading};
  color: ${({ theme }) => theme.colors.maroon};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 500;
`;

const BioContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Bio = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const BioParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral700};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  flex-shrink: 0;
  margin-top: ${({ theme }) => theme.space.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    margin-top: 0;
  }
`;

const ProminentHeadshot = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 4px solid ${theme.colors.purpleLight};
  box-shadow: ${theme.shadow.lg};
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export default function BioSection() {
  return (
    <Section>
      <ContentWrapper>
        <Header>
          <Title>Debbie Santos</Title>
          <Subtitle>Licensed Professional Counselor</Subtitle>
        </Header>
        <HorizontalLine />
        <BioContent>
          <Bio>
            <BioParagraph>
              Today you are one step closer to a new you where you feel empowered and on a positive path to growth and well-being.
            </BioParagraph>
            <BioParagraph>
              As a solution-focused therapist, I aim to help you uncover your true potential and lead a life worth celebrating. While we can't change past difficult situations, we can work together to better understand and resolve challenges in your life.
            </BioParagraph>
            <BioParagraph>
              By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
            </BioParagraph>
            <BioParagraph>
              If you're looking for extra support and guidance through a challenging situation, or you're just ready to move in a new direction in your life, I look forward to working with you to achieve your goals.
            </BioParagraph>
          </Bio>
          <ImageContainer>
            <ProminentHeadshot 
              src="/headshot.jpg"
              alt="Debbie Santos - Counselor"
              width={400}
              height={400}
              priority
            />
          </ImageContainer>
        </BioContent>
      </ContentWrapper>
    </Section>
  );
} 