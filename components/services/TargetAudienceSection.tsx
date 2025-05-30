"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
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

const AudienceColumn = styled.div`
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
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-weight: 600;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral700};
`;

const audiences = [
  {
    title: "Individuals",
    text: "Adults and teens seeking support for personal growth, mental health, and life transitions."
  },
  {
    title: "Couples & Families",
    text: "Partners and families looking to strengthen relationships, improve communication, and resolve conflicts."
  },
  {
    title: "Professionals",
    text: "Working professionals seeking balance, career growth, and stress management support."
  }
];

export default function TargetAudienceSection() {
  return (
    <Section>
      <Title>Who I Help</Title>
      <ContentWrapper>
        {audiences.map((audience) => (
          <AudienceColumn key={audience.title}>
            <ColumnTitle>{audience.title}</ColumnTitle>
            <Text>{audience.text}</Text>
          </AudienceColumn>
        ))}
      </ContentWrapper>
    </Section>
  );
} 