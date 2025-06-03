"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import HorizontalLine from "../atomic/HorizontalLine";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.lg};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size['2xl']};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`;

const PhilosophyColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  padding: ${({ theme }) => theme.space.lg};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.space.xl};
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, ${({ theme }) => theme.colors.purpleLight}, transparent);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:not(:first-child)::before {
      display: none;
    }
    border-bottom: 2px solid ${({ theme }) => theme.colors.purpleLight};
    padding-bottom: ${({ theme }) => theme.space.xl};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.neutral700};
`;

const philosophyPoints = [
  {
    title: "Client-Centered Approach",
    text: "Your unique needs and goals are at the center of our work together. I believe in creating a safe, non-judgmental space where you can explore your thoughts and feelings freely."
  },
  {
    title: "Solution-Focused Therapy",
    text: "We'll work together to identify practical solutions and strategies that help you overcome challenges and achieve your personal growth goals."
  },
  {
    title: "Holistic Well-being",
    text: "I take a comprehensive approach to mental health, considering all aspects of your life and how they interact to affect your overall well-being."
  }
];

export default function PhilosophySection() {
  return (
    <Section>
      <Title>Professional Approach</Title>
      <HorizontalLine />
      <ContentWrapper>
        {philosophyPoints.map((point) => (
          <PhilosophyColumn key={point.title}>
            <ColumnTitle>{point.title}</ColumnTitle>
            <Text>{point.text}</Text>
          </PhilosophyColumn>
        ))}
      </ContentWrapper>
    </Section>
  );
} 